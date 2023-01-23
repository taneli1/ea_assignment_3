import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import React, { useEffect } from "react"
import { Button } from "../components/common/Button"
import { CardLayout } from "../components/common/CardLayout"
import { Center } from "../components/common/Center"
import { Loading } from "../components/common/Loading"
import { PageNavBar } from "../components/page/PageNavBar"
import { ProfileUser } from "../components/profile/ProfileUser"
import { TranslationListItem } from "../components/translation/TranslationListItem"
import { useAuth } from "../hooks/useAuth"
import { useTranslationHistory } from "../hooks/useTranslationHistory"

export const Profile = () => {
  const { logout, user } = useAuth()
  const { translations, status, fetchHistory } = useTranslationHistory()

  useEffect(() => {
    fetchHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tlElements = (() =>
    translations.map((it, i) => (
      <TranslationListItem key={`${i}-${it}`} text={it} onClick={() => {}} />
    )))()

  return (
    <>
      <PageNavBar />
      <Center>
        <CardLayout>
          <section className="flex flex-row p-5 justify-between items-center space-x-64">
            <ProfileUser user={user} reversed />
            <Button text="Logout" onClick={() => logout()}>
              <ArrowRightOnRectangleIcon className="h-5 w-5"></ArrowRightOnRectangleIcon>
            </Button>
          </section>

          <span className="mx-2 my-1 border-b border-dashed border-light flex" />

          <section className="flex flex-col p-5">
            <div className="justify-between flex">
              <p className="font-ec text-md text-gray">Translation history</p>
              <Loading status={status} />
            </div>
            <section className="mt-4 space-y-1">{tlElements}</section>
          </section>
        </CardLayout>
      </Center>
    </>
  )
}
