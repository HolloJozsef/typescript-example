import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <header>
      <Navbar />  
    </header>
    <div className="App">
      
          <Routes>
            
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
