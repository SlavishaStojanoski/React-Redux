import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImage, fetchImageSmall } from '../redux/imageLogo/imageLogo'

export default function LogoImage ({ size }) {
  const dispatch = useDispatch()
  const { imageUrl, imageUrlSmall, pending, error } = useSelector(store => store.imageLogoReducer)

  useEffect(() => {
    if (!imageUrl && !pending) dispatch(fetchImage())
    if (!imageUrlSmall && !pending) dispatch(fetchImageSmall())
  }, [dispatch])


  if (error || pending) return null

  // if (size === 'large') {
  //   return <img src={imageUrl} />
  // } else {
  //   return <img src={imageUrlSmall} />
  // }

  // ekvivalentno so IF-ot pogore
  return <div>
  <img src={size === 'large' ? imageUrl : imageUrlSmall} />
  </div>
}