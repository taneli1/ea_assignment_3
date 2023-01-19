import React from "react"
import PropTypes from "prop-types"

const Props = {
  children: PropTypes.node.isRequired,
}

export const CardLayout = ({ children }) => {
  return (
    <div class="items-center flex justify-center mt-2">
      <div class="h-36 w-64 drop-shadow rounded-lg bg-gradient-to-b from-primary to-secondary p-[1px]">
        <div class="h-full w-full bg-white rounded-lg">{children}</div>
      </div>
    </div>
  )
}

CardLayout.propTypes = Props
