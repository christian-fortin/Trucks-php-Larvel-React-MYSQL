import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import NavBar from './components/NavBar';
import Show from './components/Show';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/show" element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default App;