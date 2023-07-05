import SettingsTitle from './SettingsTitle'
import { useBackgrounds } from '../api/use-backgrounds'
import { useContext } from 'react'
import { SettingsContext } from '../context/settings'

interface Background {
  id: 'string'
  name: 'string'
  src: 'string'
}

export default function Background() {
  const { isLoading, data, error } = useBackgrounds()
  const { settings, setSettings } = useContext(SettingsContext)

  const selectBackground = (src: string) => {
    const newSettings = { ...settings, backgroundSrc: src }
    setSettings(newSettings)
  }

  return (
    <div className=''>
      <SettingsTitle text='Select background' />
      <div className='flex gap-2'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Ops, there was an error: {error}</div>}
        {data &&
          data.map((background) => {
            return (
              <div
                key={background.id}
                onClick={() => selectBackground(background.src)}
                className='max-w-[150px] max-h-[150px] overflow-hidden'
              >
                <img
                  className='  object-cover'
                  src={background.src}
                  alt={background.name}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
