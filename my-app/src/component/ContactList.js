import React, { useContext } from 'react'
import { Context } from '../GLobalContext'
import styled from 'style-components'

export default function List() {
  const { contacts, toogleCheckbox } = useContext(Context)
  let arr = []
  
  contacts.some(contact => {
      if(contact.isChecked) {
        arr.push(contact)
        console.log(arr);
      }else {
        return null
      }
    })  


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
            <div>
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
