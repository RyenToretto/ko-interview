import { ref, computed } from 'vue'

export type InterviewMode = 'interviewer' | 'candidate'

const mode = ref<InterviewMode>(
  (localStorage.getItem('interview-mode') as InterviewMode) || 'interviewer'
)

export function useInterviewMode() {
  const isInterviewer = computed(() => mode.value === 'interviewer')
  const isCandidate = computed(() => mode.value === 'candidate')

  function setMode(newMode: InterviewMode) {
    mode.value = newMode
    localStorage.setItem('interview-mode', newMode)
  }

  function toggleMode() {
    setMode(mode.value === 'interviewer' ? 'candidate' : 'interviewer')
  }

  return { mode, isInterviewer, isCandidate, setMode, toggleMode }
}
