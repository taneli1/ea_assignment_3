let translations = []

export const apiTranslationSave = async (string) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const cp = [...translations]
      cp.push(string)
      resolve(cp)
    }, 200)
  })
}

export const apiTranslationGetHistory = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(translations)
    }, 200)
  })
}

export const apiTranslationClearHistory = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      translations = []
      resolve([])
    }, 200)
  })
}
