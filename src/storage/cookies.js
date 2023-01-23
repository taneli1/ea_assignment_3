import Cookies from "js-cookie"

export const cookieSave = (key, val) => {
  if (typeof val === "object") {
    Cookies.set(key, JSON.stringify(val))
    return
  }

  Cookies.set(key, val)
}
export const cookieGet = (key) => tryParse(Cookies.get(key))

export const cookieDelete = (key) => Cookies.remove(key)

const tryParse = (str) => {
  try {
    return JSON.parse(str)
  } catch (error) {
    return str
  }
}
