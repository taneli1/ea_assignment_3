import React from "react"
import PropTypes from "prop-types"

const Props = {
  children: PropTypes.node.isRequired,
}

export const PageBackground = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-lines bg-no-repeat bg-contain bg-[center_bottom_30%]">
      {children}
    </div>
  )
}

PageBackground.propTypes = Props
