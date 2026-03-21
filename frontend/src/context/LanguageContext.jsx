import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import es from '../i18n/es'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = lang === 'en' ? en : es
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
