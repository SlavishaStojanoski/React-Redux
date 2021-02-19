import React, { 
  useEffect, 
  // useContext 
} from 'react'
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

  return <div>{data.map(song => song.name)}</div>
}

export default Songs