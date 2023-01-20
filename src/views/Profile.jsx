import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import React from "react"
import { Button } from "../components/common/Button"
import { CardLayout } from "../components/common/CardLayout"
import { Center } from "../components/common/Center"
import { PageNavBar } from "../components/page/PageNavBar"
import { ProfileUser } from "../components/profile/ProfileUser"

export const Profile = (props) => {
  return (
    <>
      <PageNavBar />
      <Center>
        <CardLayout>
          <section className="flex flex-row p-5 space-x-64 items-center">
            <ProfileUser username="Placeholder" reversed />
            <Button text="Logout" onClick={() => {}}>
              <ArrowRightOnRectangleIcon className="h-5 w-5"></ArrowRightOnRectangleIcon>
            </Button>
          </section>

          <span className="mx-2 my-1 border-b border-dashed border-light flex" />

          <section className="flex p-5">
            <p>Translation history</p>
          </section>
        </CardLayout>
      </Center>
    </>
  )
}
