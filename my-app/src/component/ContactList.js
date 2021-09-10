import React, { useContext } from 'react'
import { Context } from '../gLobalContext'

export default function List() {
  const { contacts, toogleCheckbox } = useContext(Context)
  
  const some = contacts.some(contact => contact.isChecked)  

  console.log(some && contacts.filter(contact => contact.isChecked));

 const sortedContacts = contacts.sort((a, b) => a.last_name.localeCompare(b.last_name))
 
  return (
    <ul>
      {
        sortedContacts.map((contact) => (
        <li key={contact.id}>
          <label htmlFor='checkbox'>
            <div>
              {contact.avatar ? (
                <img src={contact.avatar} alt='avatar' />
              ) : (
                <div className='avatar'>
                  {contact.first_name.charAt(0)} {contact.last_name.charAt(0)}
                </div>
              )}
            </div>
            <div className="wrapper">
              <div className='names'>
                <b>{contact.first_name}</b>
                <b>{contact.last_name}</b>
              </div>
              <span>{contact.email}</span>
            </div>
          </label>
          <input type='checkbox'  id='checkbox' onClick={() => toogleCheckbox(contact.id)} />
        </li>
      ))}
    </ul>
  )
}
