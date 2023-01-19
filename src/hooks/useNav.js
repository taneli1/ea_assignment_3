import { useLocation, useNavigate } from "react-router"
import { PATHS } from "../router/AppRouter"

export const useNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const toHome = () => {
    navigate(PATHS.translate)
  }

  const toProfile = () => {
    navigate(PATHS.profile)
  }

  const isCurrentPath = (path) => {
    return location.pathname === path
  }

  return { toHome, toProfile, isCurrentPath }
}
