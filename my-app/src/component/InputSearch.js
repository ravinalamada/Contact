import React, { useContext } from 'react'
import { Context } from '../gLobalContext'

export default function InputSearch() {
  const { name, searchContactByName } = useContext(Context)

  return (
    <input
      type='search'
      className='inputSearch'
      value={name}
      onChange={searchContactByName}
    />
  )
}
