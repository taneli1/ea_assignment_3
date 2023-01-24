import React from "react"
import PropTypes from "prop-types"
import { Status } from "../../utils/status"
import { Loading } from "../common/Loading"
import { TrashIcon } from "@heroicons/react/24/solid"
import { TranslationListItem } from "./TranslationListItem"
import { useNav } from "../../hooks/useNav"
import { useTranslationHistory } from "../../hooks/useTranslationHistory"

const Props = {
  status: PropTypes.oneOf([Status.loading, Status.error, Status.idle]),
  translations: PropTypes.array.isRequired,
}

export const TranslationHistory = ({ status, translations }) => {
  const { clear } = useTranslationHistory()
  const { toHomeWithInitial } = useNav()

  const promptClear = () => {
    const txt = "Do you want to clear translation history?"
    if (window.confirm(txt)) {
      clear()
    }
  }

  const tlElements = (() =>
    translations.map((it, i) => (
      <TranslationListItem
        onClick={() => {
          toHomeWithInitial(it)
        }}
        key={`${i}-${it}`}
        text={it}
      />
    )))()

  const listEmpty = (() => (
    <p className="font-pop text-center italic text-light py-3">
      You haven't translated anything yet.
    </p>
  ))()

  return (
    <section className="flex flex-col p-5">
      <div className="justify-between flex">
        <p className="mt-2 font-ec text-md text-gray">Translation history</p>
        <section className="min-h-[3rem]">
          <Loading status={status} />
          {status !== Status.loading && (
            <TrashIcon
              onClick={() => {
                promptClear()
              }}
              className="w-10 h-10 cursor pointer text-gray cursor-pointer
               hover:bg-gray hover:text-white bg-white drop-shadow p-2 rounded-lg"
            />
          )}
        </section>
      </div>
      <section className="mt-2 space-y-1">
        {translations.length === 0 ? listEmpty : tlElements}
      </section>
    </section>
  )
}

TranslationHistory.propTypes = Props
