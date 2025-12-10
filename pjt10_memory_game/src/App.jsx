import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './components/StartGame'
import './components/Styles.css'
import Game from './components/Game'
import DoneGame from './components/DoneGame'

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<StartGame></StartGame>}></Route>
    <Route path='/game' element={<Game></Game>}></Route>
    <Route path='/done' element={<DoneGame></DoneGame>}></Route>
    </Routes>
    </BrowserRouter>

    
     
    </>
  )

}

export default App
