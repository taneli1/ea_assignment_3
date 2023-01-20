import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth/authSlice"
import translationSlice from "./translation/translationSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    translation: translationSlice,
  },
})
