import './App.css';
import Header from './components/Header'
import Main from './pages/Main';
import Footer from './components/Footer'
import UserPref from './pages/User-preferences';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { Toggle2Off } from 'react-bootstrap-icons';
import {useState} from 'react'
import Auth from './utils/auth';





function App() {

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };
 console.log(Auth.loggedIn())
console.log(Date.now() / 1000)
// console.log(Auth.isTokenExpired(Auth.getToken()))

  return (
    <Router>
      <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
        <Toggle2Off className={`toggle2off ${isDarkMode ? 'dark' : 'light'} `}
        onClick={switchTheme}/>
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
