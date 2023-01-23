import { useDispatch, useSelector } from "react-redux"
import {
  selectStatus,
  selectTranslations,
  translationClearHistory,
  translationGetHistory,
} from "../state/translation/translationSlice"

export const useTranslationHistory = () => {
  const dispatch = useDispatch()
  const translations = useSelector(selectTranslations)
  const status = useSelector(selectStatus)

  const fetchHistory = () => {
    dispatch(translationGetHistory())
  }

  const clear = () => {
    dispatch(translationClearHistory())
  }

  return { translations, status, fetchHistory, clear }
}
