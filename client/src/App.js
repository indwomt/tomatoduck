
import './App.css';
import Timer from './components/Timer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
// import bootstrap from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
        <Timer />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
