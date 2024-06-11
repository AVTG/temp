import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SportsPage } from './pages/SportsPage/SportsPage';
import  Events  from './pages/Events/Events';
import {Udyatva} from './pages/Udyatva/Udyatva' ;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Office-Bearer" element={<Home/>} />
        <Route path='/sports/:id' element = {<SportsPage/>} />
        <Route path='/Events' element = {<Events/>} />
        <Route path='/Udyatva' element = {<Udyatva/>} />
      </Routes>
    </Router>
  );
}

export default App;
