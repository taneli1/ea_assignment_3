import React from "react"
import { PageNavBar } from "../components/page/PageNavBar"
import { TranslationResultCard } from "../components/translation/TranslationResultCard"
import { TranslationForm } from "../components/translation/TranslationForm"
import { useTranslate } from "../hooks/useTranslate"
import { useEffect } from "react"
import { useNav } from "../hooks/useNav"

export const Translation = () => {
  const { state, resetState } = useNav()
  const { result, translate, reset, setInitial } = useTranslate()

  useEffect(() => {
    setInitial(state?.initialString)
    resetState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PageNavBar />

      <TranslationForm
        initialValue={state?.initialString}
        translate={translate}
        reset={reset}
      />
      <TranslationResultCard result={result} />
    </>
  )
}
