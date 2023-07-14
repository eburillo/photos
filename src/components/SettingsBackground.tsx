import Title from './atoms/Title'
import { useBackgrounds } from '../api/use-backgrounds'
import Background from './Background'
import { memo } from 'react'

export default memo(function SettingsBackground() {
  const { isLoading, data, error } = useBackgrounds()

  return (
    <>
      <Title>Select background</Title>
      <div className='grid grid-cols-3'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Ops, there was an error: {error}</div>}
        {data &&
          data.map((background) => (
            <Background key={background.src} {...background} />
          ))}
      </div>
    </>
  )
})
