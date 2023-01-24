import React from "react"
import PropTypes from "prop-types"

const Props = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export const Button = ({ text, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-primary hover:text-white flex text-primary py-3 px-3 align items-center rounded-lg drop-shadow bg-white"
    >
      <p className="mr-1 font-bold">{text}</p>
      {children}
    </button>
  )
}

Button.propTypes = Props
