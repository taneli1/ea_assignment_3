let translations = []

export const apiTranslationSave = async (string) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      translations.push(string)
      resolve(translations)
    }, 200)
  })
}

export const apiTranslationHistory = async () => {
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
