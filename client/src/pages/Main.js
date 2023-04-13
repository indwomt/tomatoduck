import Timer from '../components/Timer'
import Tasks from '../components/Tasks'

import ChatBot from '../components/Chatbot';

const Main = () => {
    return (
      <>
        <div className='main'>
          <Timer />
        </div>
        <div className='container d-flex justify-content-between flex-wrap'>
          <div className='col-md-6 col-12'>
            <Tasks />
          </div>
          <div className='col-md-6 col-12'>
            <ChatBot />
          </div>
        </div>
      </>
    )
  }
  
export default Main
