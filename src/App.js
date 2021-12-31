import './App.css';
import Home from './Component/Home';
import Student from './Component/Student'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './Component/Contact';
import Homee from './Component/Homee';

function App() {
  return (
    <div className='App'>
    <Router>
       <Home/>
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/home" element={<Homee/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>


    
  );
}

export default App;
