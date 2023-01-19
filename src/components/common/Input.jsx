import React from "react"
import PropTypes from "prop-types"
import { IconButton } from "./IconButton"

const Props = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func, // If given, display button next to input when there is text
  placeholder: PropTypes.string,
}

export const Input = ({ value, onChange, onConfirm, placeholder }) => {
  const displayBtn = onConfirm && value !== ""

  const valueChanged = (e) => {
    const txt = e.target.value
    onChange(txt)
  }

  return (
    <section className="flex place-content-center">
      <input
        value={value}
        onChange={valueChanged}
        type="text"
        className="border border-primary rounded-xl bg-white drop-shadow focus:outline-none px-3 py-2 font-bot text-gray mr-1"
        placeholder={placeholder ?? ""}
      />

      {displayBtn && <IconButton onClick={onConfirm} icon="chevron" />}
    </section>
  )
}

Input.propTypes = Props
