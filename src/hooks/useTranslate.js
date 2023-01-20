import { useState } from "react"
import { useDispatch } from "react-redux"
import { translationSave } from "../state/translation/translationSlice"

export const useTranslate = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [result, setResult] = useState(null)

  const translate = () => {
    // use react-hook-forms -> on error dont translate
    dispatch(translationSave(input))
    setResult(input)
  }

  const onInput = (str) => {
    setInput(str)
  }

  return { input, onInput, translate, result }
}
