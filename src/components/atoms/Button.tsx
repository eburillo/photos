import { Button } from '../../types'

export default function Button({ children, onClick }: Button) {
  return (
    <button
      className='mt-4 py-2 px-4 rounded bg-sky-500 hover:bg-sky-400 text-white'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
