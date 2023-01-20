import { Status } from "../../utils/status"

export const selectStatus = (state) => state.auth.status

export const statusLoading = (state) => {
  state.status = Status.loading
}

export const statusError = (state) => {
  state.status = Status.error
}
