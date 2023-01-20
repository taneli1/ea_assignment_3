import React from "react"
import { useAuth } from "../../hooks/useAuth"
import { useNav } from "../../hooks/useNav"
import { PATHS } from "../../router/AppRouter"
import { LinkTo } from "../common/LinkTo"
import { ProfileUser } from "../profile/ProfileUser"
import { PageAppTitle } from "./PageAppTitle"

export const PageNavBar = () => {
  const { user } = useAuth()
  const { toProfile, isCurrentPath } = useNav()
  const inProfile = isCurrentPath(PATHS.profile)

  return (
    <div className="p-5 absolute top-0 left-0 w-full flex justify-between">
      <PageAppTitle className="mt-2" />
      {!inProfile && <ProfileUser user={user} onClick={toProfile} />}
      {inProfile && <LinkTo path={PATHS.translate} text="Close profile" />}
    </div>
  )
}
