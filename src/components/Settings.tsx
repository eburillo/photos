import Background from './Background'
import Text from './Text'
import Photo from './Photo'

export default function Settings() {
  return (
    <div className='md:grow-2 md:px-2'>
      <Background />
      <Photo />
      <Text />
    </div>
  )
}
