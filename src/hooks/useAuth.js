import { useDispatch, useSelector } from "react-redux"
import {
  authLogin,
  authLogout,
  selectUser,
  selectStatus,
} from "../state/auth/authSlice"
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
    dispatch(authLogout())
  }

  return { user, status, login, logout }
}
