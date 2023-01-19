import React, { useState } from "react"
import { PageAppTitle } from "../components/page/PageAppTitle"
import { Input } from "../components/common/Input"
import { Center } from "../components/common/Center"
import { useNav } from "../hooks/useNav"

export const Login = () => {
  const { toHome } = useNav()
  const [username, setUsername] = useState("")

  return (
    <Center className="space-y-8 mb-8">
      <PageAppTitle variant="large" />
      <Input
        value={username}
        onChange={setUsername}
        onConfirm={toHome}
        placeholder="Enter username"
      />
    </Center>
  )
}
