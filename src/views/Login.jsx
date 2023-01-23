import React, { useState } from "react"
import { PageAppTitle } from "../components/page/PageAppTitle"
import { Input } from "../components/common/Input"
import { Center } from "../components/common/Center"
import { useNav } from "../hooks/useNav"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"
import { Loading } from "../components/common/Loading"
import { Status } from "../utils/status"

export const Login = () => {
  const [username, setUsername] = useState("")
  const { login, status, user } = useAuth()
  const { toHome } = useNav()
  let isLoading = status === Status.loading

  useEffect(() => {
    if (user) {
      toHome()
    }
  }, [user, toHome])

  return (
    <Center className="flex flex-col space-y-8 mb-8 animate__animated animate__fadeIn">
      <PageAppTitle variant="large" />
      {isLoading ? (
        <Center>
          <Loading status={"loading"} />
        </Center>
      ) : (
        <Input
          value={username}
          onChange={setUsername}
          onConfirm={() => {
            login(username)
          }}
          placeholder="Enter username"
        />
      )}
    </Center>
  )
}
