import React, { useState } from "react"
import PropTypes from "prop-types"
import { Input } from "../common/Input"
import { REGEX_ALPHABET_SPACE } from "../../utils/const"

const Props = {
  translate: PropTypes.func.isRequired,
}

export const TranslationForm = ({ translate }) => {
  const [input, setInput] = useState("")

  const onChange = (str) => {
    if (str === "" || REGEX_ALPHABET_SPACE.test(str)) setInput(str)
  }

  return (
    <>
      <Input
        value={input}
        onChange={onChange}
        placeholder="What to translate?"
        onConfirm={() => translate(input)}
      />
    </>
  )
}

TranslationForm.propTypes = Props
