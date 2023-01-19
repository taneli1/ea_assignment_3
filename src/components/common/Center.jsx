import React from "react"
import PropTypes from "prop-types"

const Props = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const Center = ({ children, className }) => {
  return <section className={`m-auto ${className}`}>{children}</section>
}

Center.propTypes = Props
