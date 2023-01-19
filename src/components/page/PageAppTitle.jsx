import React from "react"
import PropTypes from "prop-types"
import { useNav } from "../../hooks/useNav"

const Props = {
  variant: PropTypes.oneOf(["", "large"]),
  className: PropTypes.string,
}

export const PageAppTitle = ({ variant, className }) => {
  const { toHome } = useNav()
  const size = variant === "large" ? "text-6xl" : "text-3xl"
  const bg = "bg-gradient-to-b from-primary to-secondary"
  const txt = "font-ec bg-clip-text text-invisible"

  return (
    <p
      onClick={toHome}
      className={`inline-block select-none cursor-pointer ${size} ${bg} ${txt} ${className}`}
    >
      Lost in translation
    </p>
  )
}

PageAppTitle.propTypes = Props
