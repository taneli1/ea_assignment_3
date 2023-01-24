import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import React, { useEffect } from "react"
import { Button } from "../components/common/Button"
import { CardLayout } from "../components/common/CardLayout"
import { Center } from "../components/common/Center"
import { PageNavBar } from "../components/page/PageNavBar"
import { ProfileUser } from "../components/profile/ProfileUser"
import { TranslationHistory } from "../components/translation/TranslationHistory"
import { useAuth } from "../hooks/useAuth"
import { useTranslationHistory } from "../hooks/useTranslationHistory"

export const Profile = () => {
  const { logout, user } = useAuth()
  const { translations, status, fetchHistory } = useTranslationHistory()

  useEffect(() => {
    fetchHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const promptLogout = () => {
    const txt =
      "Are you sure you want to log out? Translation history will be cleared."

    if (window.confirm(txt)) {
      logout()
    }
  }

  return (
    <>
      <PageNavBar />
      <Center>
        <CardLayout>
          <section className="flex flex-row p-5 justify-between items-center space-x-64">
            <ProfileUser user={user} reversed />
            <Button text="Logout" onClick={() => promptLogout()}>
              <ArrowRightOnRectangleIcon className="h-5 w-5"></ArrowRightOnRectangleIcon>
            </Button>
          </section>

          <span className="mx-2 my-1 border-b border-dashed border-light flex" />

          <TranslationHistory status={status} translations={translations} />
        </CardLayout>
      </Center>
    </>
  )
}
