import { useState } from "react"
import { useDispatch } from "react-redux"
import { translationSave } from "../state/translation/translationSlice"

// Performs 'translations'.
export const useTranslate = () => {
  const dispatch = useDispatch()
  const [result, setResult] = useState(null)

  const translate = (string) => {
    dispatch(translationSave(string.trim()))
    setResult(string.trim())
  }

  const reset = () => {
    setResult(null)
  }

  const setInitial = (string) => {
    setResult(string ?? null)
  }

  return { translate, reset, setInitial, result }
}
