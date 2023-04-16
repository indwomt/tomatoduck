import { useState } from 'react'
import Form from 'react-bootstrap/Form'


const UserPref = () => {
    const [userData, setUserData] = useState({username:``})
   
    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
    }

    return (
        <div className="user-pref-box container">
            <Form>
            <Form.Control
                    type='text'
                    placeholder='Your username here'
                    name='username'
                    onChange={handleInput}
                    value={userData.username}
                    required
                />
            </Form>
        </div>
    )
}
export default UserPref
