import React, { useState } from "react"
import PropTypes from "prop-types"
import { Input } from "../common/Input"
import { REGEX_ALPHABET_SPACE } from "../../utils/const"

const Props = {
  translate: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
}

export const TranslationForm = ({ translate, reset, initialValue }) => {
  const [translated, setTranslated] = useState(false)
  const [input, setInput] = useState(initialValue ?? "")

  const onChange = (str) => {
    if (str === "" || REGEX_ALPHABET_SPACE.test(str)) setInput(str)

    if (translated) {
      setTranslated(false)
      reset()
    }
  }

  const onTranslate = () => {
    translate(input)
    setTranslated(true)
  }

  return (
    <>
      <Input
        value={input}
        onChange={onChange}
        placeholder="What to translate?"
        onConfirm={translated ? null : onTranslate}
      />
    </>
  )
}

TranslationForm.propTypes = Props
