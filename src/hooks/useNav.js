import { useLocation, useNavigate } from "react-router"
import { PATHS } from "../router/AppRouter"

export const useNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { state } = useLocation()

  const toHome = () => {
    navigate(PATHS.translate)
  }

  const toHomeWithInitial = (translation) => {
    navigate(PATHS.translate, {
      state: { initialString: translation },
    })
  }

  const toProfile = () => {
    navigate(PATHS.profile)
  }

  const isCurrentPath = (path) => {
    return location.pathname === path
  }

  const resetState = () => {
    navigate(location.pathname, { replace: true })
  }

  return {
    state,
    toHome,
    toProfile,
    isCurrentPath,
    toHomeWithInitial,
    resetState,
  }
}
