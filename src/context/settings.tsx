import { createContext, useState, ReactElement, Dispatch } from 'react'

type SettingsType = {
  backgroundSrc: string
  imageSrc: string
  text: string
}

interface SettingsContext {
  settings: SettingsType
  setSettings: Dispatch<SettingsType>
}

const settingsInitialState = {
  backgroundSrc: '',
  imageSrc: '',
  text: ''
}

export const SettingsContext = createContext<SettingsContext>({
  settings: settingsInitialState,
  setSettings: () => undefined
})

export const SettingsProvider = ({ children }: { children: ReactElement }) => {
  const [settings, setSettings] = useState(settingsInitialState)

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
