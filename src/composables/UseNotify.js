import { useQuasar } from 'quasar'

export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Sucesso!'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Falha!'
    })
  }

  const notifyWarning = (message) => {
    $q.notify({
      type: 'warning',
      message: message || 'Atenção!'
    })
  }

  const notifyInfo = (message) => {
    $q.notify({
      type: 'info',
      message: message || 'Notificação!'
    })
  }

  return {
    notifySuccess,
    notifyError,
    notifyWarning,
    notifyInfo
  }
}
