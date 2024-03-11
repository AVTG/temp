import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App text-center font-bold underline w-screen text-6xl">
          STUDENT GYMKHANA COUNCIL
        </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
