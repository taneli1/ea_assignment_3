import { useDispatch, useSelector } from "react-redux"
import {
  selectTranslations,
  translationClearHistory,
  translationGetHistory,
  translationSave,
} from "../state/translation/translationSlice"
import { selectStatus } from "../state/util/statusUtil"
import { Status } from "../utils/status"

export const useTranslations = () => {
  const dispatch = useDispatch()
  const translations = useSelector(selectTranslations)
  const status = useSelector(selectStatus)

  const fetchHistory = () => {
    if (status === Status.loading) return
    dispatch(translationGetHistory)
  }

  const translate = (string) => {
    if (status === Status.loading) return
    dispatch(translationSave(string))
  }

  const clearHistory = () => {
    dispatch(translationClearHistory)
  }

  return { translations, status, translate, fetchHistory, clearHistory }
}
