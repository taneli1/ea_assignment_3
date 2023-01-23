import React from "react"
import { CardLayout } from "../common/CardLayout"
import PropTypes from "prop-types"

const Props = {
  result: PropTypes.string,
}

export const TranslationResultCard = ({ result }) => {
  if (!result) {
    return null
  }

  return (
    <CardLayout>
      <p className="p-2 font-ec text-md text-gray">Translation:</p>
    </CardLayout>
  )
}

TranslationResultCard.propTypes = Props
