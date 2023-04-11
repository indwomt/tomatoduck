import Timer from '../components/Timer'
import Tasks from '../components/Tasks'

import ChatBot from '../components/chatbot';

const Main = () => {
    return (
        <>
        <div className='main'>
       
        

        <Timer/>
        </div>
        <div className='container justify-content-between d-flex'>
        <Tasks/>
        <ChatBot/>
        </div>
        
        </>
    )
}
export default Main