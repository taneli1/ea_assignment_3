import { useLocation, useNavigate } from "react-router"
import { PATHS } from "../router/AppRouter"

export const useNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const toHome = () => {
    navigate(PATHS.translate)
  }

  const toHomeWithTranslation = (translation) => {
    navigate(PATHS.translate, { string: translation })
  }

  const toProfile = () => {
    navigate(PATHS.profile)
  }

  const isCurrentPath = (path) => {
    return location.pathname === path
  }

  return { toHome, toProfile, isCurrentPath, toHomeWithTranslation }
}
