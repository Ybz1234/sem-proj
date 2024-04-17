import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home';
import Cities from './pages/Cities';
import Restaurants from './pages/Restaurants';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Rate from './pages/Rate';

function App() {

  const [users, setUsers] = useState([]);

  const handleCreateUser = (user) => {
    setUsers((prevUsers) => {
      let updatedUsers = [...prevUsers, user];
      console.log(updatedUsers);
      return updatedUsers;
    });
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path='/restaurants/:city' element={<Restaurants />} />
        <Route path='/SignUp' element={<SignUp onCreateUser={handleCreateUser} />} />
        <Route path='/SignIn' element={<SignIn users={users}/>} />
        <Route path='/Rate' element={<Rate/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App