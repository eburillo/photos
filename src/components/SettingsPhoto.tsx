import { memo } from 'react'
import Title from './atoms/Title'
import Photo from './Photo'
import { usePhotos } from '../api/use-photos'

export default memo(function SettingsPhoto() {
  const { isLoading, data, error } = usePhotos()

  return (
    <>
      <Title>Select main image</Title>
      <div className='grid grid-cols-3'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Ops, there was an error: {error}</div>}
        {data && data.map((photo) => <Photo key={photo.src} {...photo} />)}
      </div>
    </>
  )
})
