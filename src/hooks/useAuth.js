import { useDispatch, useSelector } from "react-redux"
import {
  authLogin,
  authLogout,
  selectStatus,
  selectUser,
} from "../state/auth/authSlice"
import { translationClearHistory } from "../state/translation/translationSlice"
import { Status } from "../utils/status"

export const useAuth = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const user = useSelector(selectUser)

  const login = (username) => {
    if (status === Status.loading) return
    dispatch(authLogin(username))
  }

  const logout = () => {
    if (status === Status.loading) return

    dispatch(translationClearHistory())
    dispatch(authLogout())
  }

  return { user, status, login, logout }
}
