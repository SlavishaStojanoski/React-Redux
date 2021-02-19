import React, { useEffect, useState } from 'react'
import User from './User.js'

const Users = () => {
  const [usersList, setUsersList] = useState(null)

  useEffect(() => {
    fetch('https://openwhyd.org/adrien?format=json')
      .then(response => response.json())
      .then(data => {
        //success
        console.log(data)
        const htmlList = data.map((user, i) => <User key={i} user={user} />)
        setUsersList(htmlList)
      })
      .catch(err => {
        //error
        console.log(err)
      })

  }, [])

  // re-render when state is changed
  return <div>
    {!usersList ? <div>loading...</div> : <div>{usersList}</div>}
  </div>
}

export default Users