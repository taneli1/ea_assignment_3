import React from "react"
import { PageNavBar } from "../components/page/PageNavBar"
import { TranslationResultCard } from "../components/translation/TranslationResultCard"
import { TranslationForm } from "../components/translation/TranslationForm"
import { useTranslate } from "../hooks/useTranslate"

export const Translation = () => {
  const { result, translate, reset } = useTranslate()

  return (
    <>
      <PageNavBar />

      <TranslationForm translate={translate} reset={reset} />
      <TranslationResultCard result={result} />
    </>
  )
}
