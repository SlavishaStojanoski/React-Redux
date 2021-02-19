import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchAlbum } from '../redux/albums/albums'

const SearchBar = () => {
  const [searchText, saveSearchText] = useState('')
  const dispatch = useDispatch()

  const saveText = (event) => {
    const { value } = event.target
    saveSearchText(value)
    dispatch(searchAlbum(value))
  }

  return <InputGroup className='mb-3'>
    <FormControl
      type='text'
      onChange={saveText}
      value={searchText}
      placeholder='Search albums by name'
    />
    {/* <InputGroup.Append>
      <Button variant='outline-secondary'
        onClick={() => dispatch(searchAlbum(searchText))}>
        Search!
      </Button>
    </InputGroup.Append> */}
  </InputGroup>
}

export default SearchBar