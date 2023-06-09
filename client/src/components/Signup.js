import React, {useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import { createUser } from '../utils/API'
import Auth from '../utils/auth'

const SignUpForm = () => {
    const [userData, setUserData] = useState({username:``, email: ``, password:``})
    const [validated] = useState(false)
    const [alert, setAlert] = useState(false)

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if(form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        try {
            const response = await createUser(userData)
            if(!response.ok) {
                throw new Error(`something's wrong`)
            }
            const {token, user} = await response.json()
           if (user) {
             Auth.login(token)}
        } catch (error) {
            console.error(error)
            setAlert(true)
        }
        setUserData({
            username:``,
            email:``,
            password:``
        })
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Alert dismissible onClose={()=> setAlert(false)} show={alert}>
                Something Went Wrong!!!
            </Alert>
            <Form.Group>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Your username here'
                    name='username'
                    onChange={handleInput}
                    value={userData.username}
                    required
                />
                <Form.Control.Feedback type='invalid'>Username is required!!!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    onChange={handleInput}
                    value={userData.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!!!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleInput}
                    value={userData.password}
                    required
                />
                <Form.Control.Feedback type='invalid'> Password is required!!!</Form.Control.Feedback>
            </Form.Group>
            <Button
                disabled={!(userData.username && userData.email && userData.password)}
                type='submit'
                variant='success'>Submit</Button>
        </Form>
    )
}

export default SignUpForm
