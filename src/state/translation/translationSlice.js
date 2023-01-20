import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import {
  apiTranslationClearHistory as apiClear,
  apiTranslationHistory as apiHistory,
  apiTranslationSave as apiSave,
} from "../../api/apiTranslation"
import { Status } from "../../utils/status"
import { statusError, statusLoading } from "../util/sliceUtil"

const translationAdapter = createEntityAdapter()

const initialState = translationAdapter.getInitialState({
  status: Status.idle,
  entities: [],
})

const translationSave = createAsyncThunk("translation/save", apiSave)
const translationHistory = createAsyncThunk("translation/history", apiHistory)
const translationClearHistory = createAsyncThunk("translation/clear", apiClear)

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
      .addCase(translationHistory.pending, statusLoading)
      .addCase(translationHistory.rejected, statusError)
      .addCase(translationHistory.fulfilled, extractTranslations)

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
