import SettingsTitle from './SettingsTitle'
import { useContext } from 'react'
import { SettingsContext } from '../context/settings'

interface Background {
  id: 'string'
  name: 'string'
  src: 'string'
}

export default function Background() {
  const { settings, setSettings } = useContext(SettingsContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSettings = { ...settings, text: e.target.value }
    setSettings(newSettings)
  }

  return (
    <div className=''>
      <SettingsTitle text='Write custom text' />
      <div className='flex gap-2'>
        <form>
          <input
            className='border border-black'
            id='custom-text'
            type='text'
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
    </div>
  )
}
