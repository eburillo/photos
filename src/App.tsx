import './App.css'

import Preview from './components/Preview'
import Settings from './components/Settings'

function App() {
  return (
    <div className='app'>
      <div className='p-2 flex justify-center bg-white shadow'>
        <img
          className='h-10'
          src='https://wp.gotphoto.com/wp-content/uploads/sites/4/2019/01/logo_gotphoto.svg'
        />
      </div>

      <div className='flex flex-col md:flex-row p-4 max-w-[1280px] my-0 mx-auto'>
        <Settings />
        <Preview />
      </div>
    </div>
  )
}

export default App
