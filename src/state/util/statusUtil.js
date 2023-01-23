import { Status } from "../../utils/status"

export const statusLoading = (state) => {
  state.status = Status.loading
}

export const statusError = (state, action) => {
  console.log("StatusError: ", state, action)
  state.status = Status.error
}
