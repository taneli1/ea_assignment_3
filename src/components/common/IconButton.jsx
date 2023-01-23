import React from "react"
import PropTypes from "prop-types"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const Props = {
  icon: PropTypes.oneOf(["chevron"]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export const IconButton = ({ icon, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={
        "border border-primary inline-block drop-shadow bg-primary hover:-translate-y-[1px] hover:translate-x-[1px] p-2 rounded-full hover:opacity-80 cursor-pointer " +
        className
      }
    >
      <ChevronRightIcon className={iconStyle} />
    </div>
  )
}
const iconStyle = "h-6 w-6 text-white"

IconButton.propTypes = Props
