import { useContext } from 'react'
import { SettingsContext } from '../context/settings'

import SettingsBackground from './SettingsBackground'
import SettingsText from './SettingsText'
import SettingsPhoto from './SettingsPhoto'
import Button from './atoms/Button'
import { SETTINGS_ACTIONS } from '../reducers/settings'

export default function Settings() {
  const { dispatch } = useContext(SettingsContext)

  const handleGenerate = () => {
    dispatch({ type: SETTINGS_ACTIONS.GENERATE_PREVIEW })
  }

  return (
    <div className='md:grow-2 md:px-2'>
      <SettingsBackground />
      <SettingsPhoto />
      <SettingsText />
      <Button onClick={handleGenerate}>Generate</Button>
    </div>
  )
}
