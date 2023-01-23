import React from "react"
import PropTypes from "prop-types"

const Props = {
  children: PropTypes.node.isRequired,
}

export const CardLayout = ({ children }) => {
  return (
    <div className="items-center flex mt-2 animate__animated animate__fadeIn animate__faster">
      <div className="flex w-full drop-shadow rounded-lg bg-gradient-to-b from-primary to-secondary p-[1px]">
        <div className="h-full w-full bg-white rounded-lg">{children}</div>
      </div>
    </div>
  )
}

CardLayout.propTypes = Props
