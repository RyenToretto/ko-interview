export interface RunResult {
  logs: Array<{ type: 'log' | 'warn' | 'error' | 'info'; args: string[] }>
  result?: string
  error?: string
  duration: number
}

const TIMEOUT_MS = 5000

export function runCodeInSandbox(code: string): Promise<RunResult> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.sandbox.add('allow-scripts')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    let settled = false
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true
        cleanup()
        resolve({
          logs: [],
          error: `执行超时（${TIMEOUT_MS / 1000}s），可能存在死循环`,
          duration: TIMEOUT_MS,
        })
      }
    }, TIMEOUT_MS)

    function cleanup() {
      window.removeEventListener('message', onMessage)
      clearTimeout(timer)
      if (iframe.parentNode) {
        document.body.removeChild(iframe)
      }
    }

    function onMessage(event: MessageEvent) {
      if (event.source !== iframe.contentWindow) return
      if (event.data?.type === 'sandbox-result') {
        if (!settled) {
          settled = true
          cleanup()
          resolve(event.data.payload as RunResult)
        }
      }
    }

    window.addEventListener('message', onMessage)

    const script = `
      <script>
        (function() {
          var __logs = [];
          var __startTime = Date.now();
          var __origConsole = {
            log: console.log, warn: console.warn,
            error: console.error, info: console.info
          };

          function capture(type) {
            return function() {
              var args = [];
              for (var i = 0; i < arguments.length; i++) {
                try {
                  args.push(typeof arguments[i] === 'object'
                    ? JSON.stringify(arguments[i])
                    : String(arguments[i]));
                } catch(e) {
                  args.push('[unserializable]');
                }
              }
              __logs.push({ type: type, args: args });
            };
          }

          console.log = capture('log');
          console.warn = capture('warn');
          console.error = capture('error');
          console.info = capture('info');

          var __result, __error;
          try {
            __result = eval(${JSON.stringify(code)});
          } catch(e) {
            __error = e.toString();
          }

          var payload = {
            logs: __logs,
            result: __result !== undefined ? String(__result) : undefined,
            error: __error,
            duration: Date.now() - __startTime
          };

          parent.postMessage({ type: 'sandbox-result', payload: payload }, '*');
        })();
      <\/script>
    `

    iframe.srcdoc = script
  })
}
