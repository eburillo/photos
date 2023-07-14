import Title from './atoms/Title'
import { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import { SETTINGS_ACTIONS } from '../reducers/settings'

export default function Text() {
  const { dispatch } = useContext(SettingsContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SETTINGS_ACTIONS.SET_TEXT, payload: e.target.value })
  }

  return (
    <>
      <Title>Write custom text</Title>
      <div className='flex gap-2'>
        <input
          className='border border-black rounded py-1 px-2'
          id='custom-text'
          type='text'
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  )
}
