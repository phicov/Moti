import React from 'react'
import NavBar from './components/NavBar';
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import Profile from './components/screens/Profile';
import Quotes from './components/screens/Quotes';
import SignUp from './components/screens/SignUp';
import CreatePost from './components/screens/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
