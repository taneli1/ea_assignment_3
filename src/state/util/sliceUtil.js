import { Status } from "../../utils/status"

export const statusLoading = (state) => {
  state.status = Status.loading
}

export const statusError = (state) => {
  state.status = Status.error
}
