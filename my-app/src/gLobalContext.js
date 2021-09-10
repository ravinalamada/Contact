import React, {
  useState,
  createContext,
  useEffect,
} from 'react'
const endpoint =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'

const Context = createContext()

function ContextProvider({ children }) {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('');

  // Randomize the quizes data
  async function getContacts() {
    const fetchContacts = await fetch(endpoint)
    const response = await fetchContacts.json();
    const newContacts = response.map(res => ({...res, isChecked: false}));
    setContacts(newContacts)
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

function toogleCheckbox(id) {
    const toogleCheckedItem = contacts.map(contact => {
      if(contact.id === id) {
        return {
          ...contact,
          isChecked: !contact.isChecked
        }
      }else {
        return contact
      }
    })
  setContacts(toogleCheckedItem);
  }


  
  function searchContactByName(e) {
    setName(e.target.value)
  }

  return (
    <Context.Provider
      value={{
        contacts,
        name,
        searchContactByName,
        toogleCheckbox,
      }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
