import React, { useState } from "react"
import { PageAppTitle } from "../components/page/PageAppTitle"
import { Input } from "../components/common/Input"
import { Center } from "../components/common/Center"
import { useNav } from "../hooks/useNav"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"
import { Loading } from "../components/common/Loading"

export const Login = () => {
  const [username, setUsername] = useState("")
  const { login, status, user } = useAuth()
  const { toHome } = useNav()

  useEffect(() => {
    if (user) {
      toHome()
    }
  }, [user, toHome])

  return (
    <Center className="space-y-8 mb-8">
      <PageAppTitle variant="large" />
      <Input
        value={username}
        onChange={setUsername}
        onConfirm={() => {
          login(username)
        }}
        placeholder="Enter username"
      />
      <Loading status={status} />
    </Center>
  )
}
