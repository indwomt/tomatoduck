import { useState } from 'react'
import { Form} from 'react-bootstrap'
import {askChatBot} from '../utils/API'
import duck from '../assets/duck.png'

const ChatBot = () => {
    const [cbResponse, setCbReponse] = useState(``)
    const [prompt, setPrompt] = useState(``)
const handleQuestionSubmit = async (e) => {
    e.preventDefault()
    try{
    const result = await askChatBot(prompt)
    const {message}=  await result.json()
    setCbReponse(message)
} catch (error) {
    console.error(error)
}}

return (
    <div className="col-12 chatbox p-3 my-5">
    
    <Form onSubmit={handleQuestionSubmit}>
        <div className='input'>
        <Form.Control
            type='text'
            value={prompt}
            onChange={e=>setPrompt(e.target.value)}
        /><span className='tag'>Powered by Open AI</span>
        </div>
        <button className='start-btn mt-3  ' type='submit'>Submit</button>
    </Form>
    <div className='duck-cont mt-3'>
        <img className='duck' alt='rubber duck'src={duck}></img>
    {cbResponse
    ? (<p className="response">{cbResponse}</p>)
    : (<p></p>)
    }
    </div>
    </div>
)
} 
export default ChatBot
