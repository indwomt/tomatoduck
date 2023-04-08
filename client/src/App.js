import './App.css';
import Header from './components/Header'
import Main from './pages/main';
import Footer from './components/Footer'
import UserPref from './pages/user-preferences';
import ChatBot from './components/chatbot';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import bootstrap from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <Routes>
          <Route
            path='/'
            element={<Main />}
            />
          <Route
            path='/preferences'
            element={<UserPref/>}
          />
          <Route
            path='*'
            element={<h1 className='mt-3'>~~Wrong page!!!~~</h1>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
