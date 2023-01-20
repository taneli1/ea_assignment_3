import React, { useState } from "react"
import { Input } from "../components/common/Input"
import { PageNavBar } from "../components/page/PageNavBar"
import { TranslationCard } from "../components/translation/TranslationCard"

export const Translation = () => {
  const [userinput, setUserinput] = useState("")

  return (
    <>
      <PageNavBar />
      <Input
        value={userinput}
        onChange={setUserinput}
        placeholder="What to translate?"
        onConfirm={() => {}}
      />

      <TranslationCard />
    </>
  )
}
