import react, { useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './component/ContactList'
import Header from './component/Header'
import InputSearch from './component/InputSearch'
import { Context } from './GLobalContext'

function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <InputSearch />
        <List />
      </div>
    </div>
  )
}

export default App
