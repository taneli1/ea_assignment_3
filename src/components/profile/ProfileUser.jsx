import React from "react"
import PropTypes from "prop-types"
import { UserCircleIcon } from "@heroicons/react/24/solid"

const Props = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  reversed: PropTypes.bool,
}

export const ProfileUser = ({ username, onClick, reversed = false }) => {
  const interactionStyle = onClick
    ? "hover:opacity-80 hover:-translate-y-[1px] hover:translate-x-[1px] cursor-pointer"
    : ""

  return (
    <div
      className={`flex ${
        reversed ? "flex-row-reverse" : "flex-row"
      } items-center `}
    >
      <p className="inline-block px-3 rounded-lg font-bot text-gray text-lg">
        {username}
      </p>
      <UserCircleIcon
        onClick={onClick}
        className={`${interactionStyle} drop-shadow h-14 w-14 text-white bg-white bg-gradient-to-b from-primary to-secondary rounded-full`}
      />
    </div>
  )
}

ProfileUser.propTypes = Props
