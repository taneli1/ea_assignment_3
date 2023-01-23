import { ChevronRightIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"
import React from "react"

const Props = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export const TranslationListItem = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex p-3 flex-row justify-between cursor-pointer
        items-center border border-light rounded-lg drop-shadow 
        bg-white hover:font-bold hover:border-primary hover:text-primary"
    >
      <p className="font-pop">{text}</p>
      <ChevronRightIcon className="h-6 w-6 text-primary" />
    </div>
  )
}

TranslationListItem.propTypes = Props
