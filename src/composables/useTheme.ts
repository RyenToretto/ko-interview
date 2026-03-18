import { ref, watch, computed } from 'vue'

export type ThemeMode = 'light' | 'dark'
export type SkinType = 'default' | 'apple' | 'hero'

const theme = ref<ThemeMode>(
  (localStorage.getItem('theme-mode') as ThemeMode) || 'dark'
)
const skin = ref<SkinType>(
  (localStorage.getItem('theme-skin') as SkinType) || 'hero'
)

function applyAll() {
  const html = document.documentElement
  html.classList.toggle('dark', theme.value === 'dark')
  html.dataset.skin = skin.value
}

applyAll()

export function useTheme() {
  function setTheme(mode: ThemeMode) {
    theme.value = mode
    localStorage.setItem('theme-mode', mode)
    applyAll()
  }

  function toggleTheme() {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  function setSkin(s: SkinType) {
    skin.value = s
    localStorage.setItem('theme-skin', s)
    applyAll()
  }

  const skinLabel = computed(() => {
    return skin.value === 'apple' ? 'Apple' : skin.value === 'hero' ? 'Hero' : 'Default'
  })

  watch(theme, applyAll)
  watch(skin, applyAll)

  return { theme, skin, skinLabel, setTheme, toggleTheme, setSkin }
}
