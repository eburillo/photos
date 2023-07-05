import { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import SettingsTitle from './SettingsTitle'

export default function Preview() {
  const { settings } = useContext(SettingsContext)
  return (
    <div className='md:grow-1'>
      <SettingsTitle text='Preview' />
      <div
        className='border rounded-sm border-black w-[400px] h-[400px] relative flex justify-center items-center'
        style={{ backgroundImage: `url(${settings.backgroundSrc})` }}
      >
        {settings.imageSrc && (
          <img
            className='max-w-[50%]'
            src={settings.imageSrc}
            alt={settings.imageSrc}
          />
        )}
        <div className='absolute bottom-4 left-0 right-0 text-center'>
          {settings.text}
        </div>
      </div>
    </div>
  )
}
