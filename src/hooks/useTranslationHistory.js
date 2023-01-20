import { useDispatch, useSelector } from "react-redux"
import {
  selectStatus,
  selectTranslations,
  translationClearHistory,
  translationGetHistory,
} from "../state/translation/translationSlice"
import { Status } from "../utils/status"

export const useTranslationHistory = () => {
  const dispatch = useDispatch()
  const translations = useSelector(selectTranslations)
  const status = useSelector(selectStatus)

  const fetch = () => {
    if (status === Status.loading) return
    dispatch(translationGetHistory)
  }

  const clear = () => {
    dispatch(translationClearHistory)
  }

  return { translations, status, fetch, clear }
}
