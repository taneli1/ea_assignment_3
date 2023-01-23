import { cookieGet } from "../storage/cookies"
import { API_URL, KEY_USER } from "../utils/const"
import { createHeaders } from "./util"

export const apiTranslationSave = async (string) => {
  const user = resolveUser()
  // Api resets translations if not provided..
  const existing = await apiTranslationGetHistory()
  const response = await fetch(API_URL + `/${user.id}`, {
    ...createHeaders(),
    method: "PATCH",
    body: JSON.stringify({
      translations: [...existing, string],
    }),
  })
  return (await response.json()).translations
}

export const apiTranslationGetHistory = async () => {
  const user = cookieGet(KEY_USER)
  if (!user) {
    throw new Error("Not logged in.")
  }

  const response = await fetch(API_URL + `?username=${user.username}`)
  const translations = (await response.json())[0].translations
  return translations
}

export const apiTranslationClearHistory = async () => {
  const user = resolveUser()
  const response = await fetch(API_URL + `/${user.id}`, {
    ...createHeaders(),
    method: "PATCH",
    body: JSON.stringify({
      translations: [],
    }),
  })
  return (await response.json()).translations
}

const resolveUser = () => {
  const user = cookieGet(KEY_USER)
  if (!user) {
    throw new Error("Not logged in.")
  }
  return user
}
