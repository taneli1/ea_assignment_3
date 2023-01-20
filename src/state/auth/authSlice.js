import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit"
import { Status } from "../../utils/status"

const authAdapter = createEntityAdapter()

const initialState = authAdapter.getInitialState({
  status: Status.idle,
  user: null,
})

export const authLogin = createAsyncThunk("auth/login", async (username) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: username })
    }, 200)
  })
})

export const authLogout = createAsyncThunk("auth/logout", async (username) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 200)
  })
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, setLoading)
      .addCase(authLogin.rejected, setError)
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = Status.idle
        state.user = action.payload
      })

    builder
      .addCase(authLogout.pending, setLoading)
      .addCase(authLogout.rejected, setError)
      .addCase(authLogout.fulfilled, (state, action) => {
        state.status = Status.idle
        state.user = null
      })
  },
})

const setLoading = (state) => {
  state.status = Status.loading
}
const setError = (state) => {
  state.status = Status.loading
}

export default authSlice.reducer

export const selectUser = (state) => state.auth.user
export const selectStatus = (state) => state.auth.status
