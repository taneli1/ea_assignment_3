import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import {
  apiTranslationClearHistory as apiClear,
  apiTranslationGetHistory as apiHistory,
  apiTranslationSave as apiSave,
} from "../../api/apiTranslation"
import { Status } from "../../utils/status"
import { statusError, statusLoading } from "../util/statusUtil"

const translationAdapter = createEntityAdapter()

const initialState = translationAdapter.getInitialState({
  status: Status.idle,
  entities: [],
})

export const translationSave = createAsyncThunk("translation/save", apiSave)
export const translationGetHistory = createAsyncThunk(
  "translation/history",
  apiHistory
)
export const translationClearHistory = createAsyncThunk(
  "translation/clear",
  apiClear
)

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(translationSave.pending, statusLoading)
      .addCase(translationSave.rejected, statusError)
      .addCase(translationSave.fulfilled, extractTranslations)

    builder
      .addCase(translationGetHistory.pending, statusLoading)
      .addCase(translationGetHistory.rejected, statusError)
      .addCase(translationGetHistory.fulfilled, extractTranslations)

    builder
      .addCase(translationClearHistory.pending, statusLoading)
      .addCase(translationClearHistory.rejected, statusError)
      .addCase(translationClearHistory.fulfilled, extractTranslations)
  },
})

const extractTranslations = (state, action) => {
  state.status = Status.idle
  state.entities = action.payload
}

export default translationSlice.reducer

export const selectTranslations = (state) => state.entities
