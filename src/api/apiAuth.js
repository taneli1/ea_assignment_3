import { cookieDelete, cookieSave } from "../storage/cookies"
import { API_URL, KEY_USER } from "../utils/const"
import { apiTranslationClearHistory } from "./apiTranslation"
import { createHeaders } from "./util"

export const apiAuthLogin = async (username) => {
  const user = (await getUser(username)) ?? (await createUser(username))
  cookieSave(KEY_USER, user)
  return user
}

const getUser = async (username) => {
  const response = await fetch(API_URL + `?username=${username}`)
  const data = await response.json()
  const userExists = data.length !== 0 && data[0] !== null
  if (userExists) {
    return {
      id: data[0].id,
      username: data[0].username,
    }
  }
  return null
}

const createUser = async (username) => {
  const response = await fetch(API_URL, {
    ...createHeaders(),
    method: "POST",
    body: JSON.stringify({
      username,
      translations: [],
    }),
  })
  const user = await response.json()
  if (user.id) {
    return {
      id: user.id,
      username: user.username,
    }
  }
  return null
}

export const apiAuthLogout = async () => {
  cookieDelete(KEY_USER)
  return null
}
