export const apiAuthLogin = async (username) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: username })
    }, 200)
  })
}

export const apiAuthLogout = async (username) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 200)
  })
}
