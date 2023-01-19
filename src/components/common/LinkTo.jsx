import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Props = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export const LinkTo = ({ path, text, className }) => {
  return (
    <NavLink className={className} to={path}>
      <p className="font-bot text-primary underline text-lg p-2">{text}</p>
    </NavLink>
  )
}

LinkTo.propTypes = Props
