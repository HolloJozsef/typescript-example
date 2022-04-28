import Login from './components/Login';
import Logout from './components/Logout';
import { UserContext } from './components/UserContext';
import Home from './components/Home';
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import React, {useState,useMemo} from 'react'
import BucketList from './components/BucketList';

function App() {
  const [user,setUser]=useState(null)
  const providerValue=useMemo(() => ({user,setUser}), [user,setUser])
  console.log(providerValue)
  return (
    <>
    <header>
      <UserContext.Provider value={providerValue}>
        <Navbar />  
      </UserContext.Provider>
      
    </header>
    <div className="App">      
    <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/bucket-list" element={<BucketList />} />

        </Routes>
        </UserContext.Provider>

    </div>
    </>
  );
}

export default App;
