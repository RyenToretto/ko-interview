import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/**
 * 响应式监听一个 CSS media query
 * @example
 *   const isMobile = useMediaQuery('(max-width: 768px)')
 */
export function useMediaQuery(query: string): Ref<boolean> {
  const matches = ref(false)
  let mql: MediaQueryList | null = null

  const handler = (e: MediaQueryListEvent | MediaQueryList) => {
    matches.value = e.matches
  }

  onMounted(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    mql = window.matchMedia(query)
    matches.value = mql.matches
    if (mql.addEventListener) {
      mql.addEventListener('change', handler)
    } else {
      mql.addListener(handler)
    }
  })

  onUnmounted(() => {
    if (!mql) return
    if (mql.removeEventListener) {
      mql.removeEventListener('change', handler)
    } else {
      mql.removeListener(handler)
    }
  })

  return matches
}

export function useIsMobile(): Ref<boolean> {
  return useMediaQuery('(max-width: 768px)')
}

export function useIsTablet(): Ref<boolean> {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
}

export function useIsDesktop(): Ref<boolean> {
  return useMediaQuery('(min-width: 1025px)')
}
