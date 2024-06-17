import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Chatpage from './pages/Chatpage'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exect path="/" Component={Homepage} />
        <Route path="/chats" Component={Chatpage} />
      </Routes>
    </div>
  );
}

export default App
