import { createContext, ReactElement, Dispatch, useReducer } from 'react'
import type { ActionType, ISettings } from '../types'
import { settingsReducer, settingsInitialState } from '../reducers/settings'

interface SettingsContext {
  settings: ISettings
  dispatch: Dispatch<ActionType>
}

export const SettingsContext = createContext<SettingsContext>({
  settings: settingsInitialState,
  dispatch: () => undefined
})

export const SettingsProvider = ({ children }: { children: ReactElement }) => {
  const [settings, dispatch] = useReducer(settingsReducer, settingsInitialState)

  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  )
}
