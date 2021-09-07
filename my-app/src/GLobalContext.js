import React, {
  useState,
  createContext,
  useEffect,
  useRef,
  useContext,
} from 'react'
const endpoint =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'

const Context = createContext()

function ContextProvider({ children }) {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  // Randomize the quizes data
  async function getContacts() {
    const fetchContacts = await fetch(endpoint)
    const response = await fetchContacts.json()
    const sortedName = response.sort((a, b) => a.last_name - b.last_name)
    setContacts(sortedName)
  }

  useEffect(() => {
    getContacts()
  }, [])

  useEffect(() => {
    if (name !== '') {
      const contactToDisplay = contacts.filter(
        (contact) =>
          contact.first_name.toLowerCase().includes(name.toLowerCase()) ||
          contact.last_name.toLowerCase().includes(name.toLowerCase())
      )
      setContacts(contactToDisplay)
    } else {
      getContacts()
    }
  }, [name])

  console.log(contacts)

  function searchContactByName(e) {
    setName(e.target.value)
  }

  return (
    <Context.Provider
      value={{
        contacts,
        name,
        searchContactByName,
      }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
