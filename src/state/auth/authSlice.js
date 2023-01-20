import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit"
import { apiAuthLogin, apiAuthLogout } from "../../api/apiAuth"
import { Status } from "../../utils/status"
import { statusError, statusLoading } from "../util/sliceUtil"

const authAdapter = createEntityAdapter()

const initialState = authAdapter.getInitialState({
  status: Status.idle,
  user: null,
})

export const authLogin = createAsyncThunk("auth/login", apiAuthLogin)
export const authLogout = createAsyncThunk("auth/logout", apiAuthLogout)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, statusLoading)
      .addCase(authLogin.rejected, statusError)
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = Status.idle
        state.user = action.payload
      })

    builder
      .addCase(authLogout.pending, statusLoading)
      .addCase(authLogout.rejected, statusError)
      .addCase(authLogout.fulfilled, (state, action) => {
        state.status = Status.idle
        state.user = null
      })
  },
})

export default authSlice.reducer

export const selectUser = (state) => state.auth.user
export const selectStatus = (state) => state.auth.status
