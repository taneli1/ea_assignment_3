import { useDispatch, useSelector } from "react-redux"
import { authLogin, selectUser } from "../state/auth/authSlice"

export const useAuth = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const login = (username) => {
    dispatch(authLogin(username))
  }

  return { user, login }
}
