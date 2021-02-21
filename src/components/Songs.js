import React, { 
  useEffect, 
  // useContext 
} from 'react'
import '../styles/componentsStyle.css'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSongs } from '../redux/songs/songs'
// import { Language } from '../context'

const Songs = () => {
  const dispatch = useDispatch()
  const { data, error, pending } =
    useSelector(state => state.songsReducer)

  // const language = useContext(Language)

  // console.log(language)

  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])

  if (pending) return <Spinner animation='border' />

  if (error) return <div>{error}</div>

  return (
    <header className='componentsBackground'>
      <div>{data.map(song => song.name)}</div>
    </header>
  )
  
}

export default Songs