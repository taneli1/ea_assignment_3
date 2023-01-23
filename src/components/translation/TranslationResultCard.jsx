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

  const sings = Array.from(result).map((char, i) => {
    if (char === " " || char === "") {
      return (
        <span
          key={`${i}-span-key`}
          className="bg-primary rounded-full w-1 h-1 mx-2"
        />
      )
    }

    return (
      <img
        key={`${i}-img-key`}
        alt={char}
        src={require(`../../assets/signs/${char.toLowerCase()}.png`)}
        className="h-20"
      />
    )
  })

  return (
    <CardLayout>
      <p className="p-3 font-ec text-md text-gray">Translation:</p>
      <section className="flex flex-row items-center flex-wrap p-2">
        {sings}
      </section>
    </CardLayout>
  )
}

TranslationResultCard.propTypes = Props
