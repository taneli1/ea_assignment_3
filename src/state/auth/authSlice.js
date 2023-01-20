import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit"
import { Status } from "../../utils/status"

const authAdapter = createEntityAdapter()

const initialState = authAdapter.getInitialState({
  status: Status.idle,
  user: {
    username: null,
  },
})

export const authLogin = createAsyncThunk("auth/login", async (username) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: username })
    }, 1000)
  })
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state, action) => {
        state.status = Status.loading
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = Status.idle
        state.user = action.payload
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.status = Status.error
      })
  },
})

export default authSlice.reducer

export const selectUser = (state) => state.auth.user
