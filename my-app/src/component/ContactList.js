import React, { useContext } from 'react'
import { Context } from '../GLobalContext'
import styled from 'style-components'

export default function List() {
  const { contacts } = useContext(Context)

  return (
    <ul>
      {contacts?.map((item) => (
        <li key={item.id}>
          <label htmlFor='checkbox'>
            <div>
              {item.avatar ? (
                <img src={item.avatar} alt='avatar' />
              ) : (
                <div className='avatar'>
                  {item.first_name.charAt(0)} {item.last_name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <div className='names'>
                <span>{item.first_name}</span>
                <span>{item.last_name}</span>
              </div>
              <span>{item.email}</span>
            </div>
          </label>
          <input type='checkbox' id='checkbox' />
        </li>
      ))}
    </ul>
  )
}
