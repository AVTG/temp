import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SportsPage } from './pages/SportsPage/SportsPage';
import {Udyatva} from './pages/Udyatva/Udyatva' ;
import  Events  from './pages/Events/Events';
import { OfficeBearer } from './pages/OfficeBearers/OfficeBearer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/OfficeBearer' element={<OfficeBearer/>} />
        <Route path='/sports/:id' element = {<SportsPage/>} />
        <Route path='/Events' element = {<Events/>} />
        <Route path='/Udyatva' element = {<Udyatva/>} />
      </Routes>
    </Router>
  );
}

export default App;
