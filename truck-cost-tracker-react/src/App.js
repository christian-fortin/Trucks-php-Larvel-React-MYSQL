import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;