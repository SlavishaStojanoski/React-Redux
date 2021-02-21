import React, { useState } from 'react'
import '../styles/login.css'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Form, FormControl, FormGroup,
  FormLabel, Col, Button
} from 'react-bootstrap'
import { saveLoginInfo } from './../redux/login/login'

// useHistory().push(/)
const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    // save login info - dispatch action
    // and redirect to homepage
    dispatch(saveLoginInfo(username, password))
    history.push('/')
  }

  const saveInput = (e) => {
    const { name, value } = e.target

    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    
      <div className='Login-component'>
        {/* <Helmet>
      <style>{'body { background-color: red; }'}</style>
    </Helmet> */}
        <Form >
          <Col>
            <FormGroup as={Col} lg={10}>
              {/* username */}
              <FormLabel className='welcomeHeader'>Enter Your Name</FormLabel>
              <FormControl
                type='text'
                name='username'
                value={username}
                onChange={saveInput}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    e.preventDefault()
                    login()
                  }
                }}
              />
            </FormGroup>

            <FormGroup as={Col} lg={10}>
              {/* password */}
              <FormLabel className='welcomeHeader'>And Your NickName</FormLabel>
              <FormControl
                type='text'
                name='password'
                value={password}
                onChange={saveInput}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    e.preventDefault()
                    login()
                  }
                }}
              />
            </FormGroup>

            <FormGroup as={Col} lg={10}>
              {/* password */}
              <Button onClick={login}>
                Continue to our music store!!
              </Button>
            </FormGroup>
          </Col>
        </Form>
      </div>
  
  )

}

export default Login