import SettingsTitle from './SettingsTitle'
import { usePhotos } from '../api/use-photos'
import { useContext } from 'react'
import { SettingsContext } from '../context/settings'

interface Photo {
  id: 'string'
  name: 'string'
  src: 'string'
}

export default function Photo() {
  const { isLoading, data, error } = usePhotos()
  const { settings, setSettings } = useContext(SettingsContext)

  const selectPhoto = (src: string) => {
    const newSettings = { ...settings, imageSrc: src }
    setSettings(newSettings)
  }

  return (
    <div className=''>
      <SettingsTitle text='Select main image' />
      <div className='flex gap-2'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Ops, there was an error: {error}</div>}
        {data &&
          data.map((photo) => {
            return (
              <div
                key={photo.id}
                onClick={() => selectPhoto(photo.src)}
                className='max-w-[150px] max-h-[150px] overflow-hidden'
              >
                <img
                  className='  object-cover'
                  src={photo.src}
                  alt={photo.name}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
