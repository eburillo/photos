import { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import Title from './atoms/Title'

export default function Preview() {
  const { settings } = useContext(SettingsContext)

  return (
    <div className='md:grow-1'>
      <Title>Preview</Title>
      <div
        className='border rounded-sm border-black w-[400px] h-[400px] relative flex justify-center items-center bg-cover bg-center'
        style={{ backgroundImage: `url(${settings.previewBackground})` }}
      >
        {settings.previewPhoto && (
          <img
            className='max-w-[50%]'
            src={settings.previewPhoto}
            alt={settings.previewPhoto}
          />
        )}
        <div className='absolute bottom-4 left-0 right-0 text-center'>
          {settings.previewText}
        </div>
      </div>
    </div>
  )
}
