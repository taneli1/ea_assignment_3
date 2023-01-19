import React from "react"
import { PATHS } from "../../router/AppRouter"
import { LinkTo } from "../common/LinkTo"

export const PageEmpty = () => {
  return (
    <section className="flex flex-col text-center">
      <p className="font-ec">Nothing to see here.</p>
      <LinkTo path={PATHS.translate} text="Back to main page" />
    </section>
  )
}
