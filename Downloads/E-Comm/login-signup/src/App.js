
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
       
      </Routes>
    </Router>
  );
}
export default App;
