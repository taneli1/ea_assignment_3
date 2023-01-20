import React from "react"
import { Input } from "../components/common/Input"
import { PageNavBar } from "../components/page/PageNavBar"
import { TranslationCard } from "../components/translation/TranslationCard"
import { useTranslate } from "../hooks/useTranslate"
import { useTranslationHistory } from "../hooks/useTranslationHistory"

export const Translation = () => {
  const { input, onInput, result, translate } = useTranslate()

  return (
    <>
      <PageNavBar />
      <Input
        value={input}
        onChange={onInput}
        placeholder="What to translate?"
        onConfirm={() => translate()}
      />

      <TranslationCard />
    </>
  )
}
