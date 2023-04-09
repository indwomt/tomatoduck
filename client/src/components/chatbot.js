import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import {askChatBot} from '../utils/API'

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
    <Container className='bordered'>
    <p>{prompt}</p>
    <br/>
    <p>{cbResponse}</p>
    <Form onSubmit={handleQuestionSubmit}>
        <Form.Control
            type='text'
            value={prompt}
            onChange={e=>setPrompt(e.target.value)}
        />
        <Button className='start-btn' type='submit'>Submit</Button>
    </Form>
    </Container>
)
} 
export default ChatBot