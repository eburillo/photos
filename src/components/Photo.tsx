import { useContext, useState } from 'react'
import { SettingsContext } from '../context/settings'
import type { Photo } from '../types'
import { SETTINGS_ACTIONS } from '../reducers/settings'

export default function Photo({ src, name }: Photo) {
  const { settings, dispatch } = useContext(SettingsContext)
  const [hasError, setHasError] = useState(false)

  const selectPhoto = (src: string) => {
    dispatch({ type: SETTINGS_ACTIONS.SET_PHOTO, payload: src })
  }

  const handleErrorLoading = () => {
    setHasError(true)
  }

  return (
    <>
      {!hasError && (
        <div
          onClick={() => selectPhoto(src)}
          className={`max-w-[150px] max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] overflow-hidden  border ${
            src === settings.photoSrc ? 'border-black ' : 'border-transparent'
          }`}
        >
          <img
            className='object-cover'
            src={src}
            alt={name}
            onError={handleErrorLoading} // event.currentTarget.parentElement!.style.display = 'none'
          />
        </div>
      )}
    </>
  )
}
