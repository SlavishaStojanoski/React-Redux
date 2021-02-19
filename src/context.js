import React from 'react'

const Language = React.createContext({
  language: 'EN',
  toggle: () => {}
})

const LanguageProvider = Language.Provider

export {
  Language,
  LanguageProvider
}