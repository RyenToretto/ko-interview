import { ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark'

const theme = ref<ThemeMode>(
  (localStorage.getItem('theme-mode') as ThemeMode) || 'light'
)

function applyTheme(mode: ThemeMode) {
  const html = document.documentElement
  if (mode === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

applyTheme(theme.value)

export function useTheme() {
  function setTheme(mode: ThemeMode) {
    theme.value = mode
    localStorage.setItem('theme-mode', mode)
    applyTheme(mode)
  }

  function toggleTheme() {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  watch(theme, applyTheme)

  return { theme, setTheme, toggleTheme }
}
