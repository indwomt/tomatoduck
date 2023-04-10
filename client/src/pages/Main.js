import Timer from '../components/Timer'
import Tasks from '../components/Tasks'

import ChatBot from '../components/Chatbot';

const Main = () => {
    return (
        <>
        <div className='main'>
        <ChatBot/>
        <Timer/>
        </div>
        <Tasks/>
        
        </>
    )
}
export default Main
