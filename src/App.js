import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SportsPage } from './pages/SportsPage/SportsPage';
import  Events  from './pages/Events/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/sports/:id' element = {<SportsPage/>} />
        <Route path='/Events' element = {<Events/>} />
      </Routes>
    </Router>
  );
}

export default App;
