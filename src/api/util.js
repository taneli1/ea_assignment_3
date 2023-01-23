import { VERY_SECRET_KEY } from "../utils/const"

export const createHeaders = () => {
  return {
    headers: {
      "X-API-Key": VERY_SECRET_KEY,
      "Content-Type": "application/json",
    },
  }
}
