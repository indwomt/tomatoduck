import { useState } from 'react'
import { Form, Container } from 'react-bootstrap'
import {askChatBot} from '../utils/API'
import duck from '../images/duck.png'

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const completion = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Hello world",
// });
// console.log(completion.data.choices[0].text);

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
    <Container className="chatbox p-3">
    
    <Form onSubmit={handleQuestionSubmit}>
        <div className='input'>
        <Form.Control
            type='text'
            value={prompt}
            onChange={e=>setPrompt(e.target.value)}
        /><span>Powered by Open AI</span>
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
    </Container>
)
} 
export default ChatBot