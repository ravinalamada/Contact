
import './App.css'
import List from './component/ContactList'
import Header from './component/Header'
import InputSearch from './component/InputSearch'

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
