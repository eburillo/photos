import { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import type { Background } from '../types'
import { SETTINGS_ACTIONS } from '../reducers/settings'

export default function Background({ src, name }: Background) {
  const { settings, dispatch } = useContext(SettingsContext)

  const selectBackground = (src: string) => {
    dispatch({ type: SETTINGS_ACTIONS.SET_BACKGROUND, payload: src })
  }

  return (
    <div
      onClick={() => selectBackground(src)}
      className={`max-w-[150px] max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] overflow-hidden border ${
        src === settings.backgroundSrc ? 'border-black ' : 'border-transparent'
      }`}
    >
      <img className='  object-cover' src={src} alt={name} />
    </div>
  )
}
