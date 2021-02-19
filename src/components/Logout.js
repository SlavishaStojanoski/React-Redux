import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/login/login'

export default function Logout () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(logout())
  }, [dispatch])

  return null
}