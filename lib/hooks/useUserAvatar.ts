import { useEffect } from 'react'
import { useUI } from '@components/ui/context'
import { getRandomColor } from '@lib/colors'

export const useUserAvatar = (name = 'userAvatar') => {
  const { userAvatar, setUserAvatar } = useUI()

  useEffect(() => {
    if (!userAvatar && localStorage.getItem(name)) {
      // Get bg from localStorage and push it to the context.
      setUserAvatar(localStorage.getItem(name))
    }
    if (!localStorage.getItem(name)) {
      // bg not set locally, generating one, setting localStorage and context to persist.
      const value = getRandomColor()
      localStorage.setItem(name, value)
      setUserAvatar(value)
    }
  }, [])

  return {
    userAvatar,
    setUserAvatar,
  }
}
