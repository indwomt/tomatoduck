
import './App.css';
import Timer from './components/Timer'
import Header from './components/Header'
import Tasks from './components/Tasks'
// import bootstrap from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
        <Timer />
      <Tasks />
    </div>
  );
}

export default App;
