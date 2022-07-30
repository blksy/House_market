import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SingIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path='/' element={<Explore/>} />
      <Route path='/offers' element={<Offers/>} />
      <Route path='/profile' element={<SingIn/>} />
      <Route path='/sign-in' element={<SingIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
     </Routes>
    </Router>
    {/*Navbar*/}
    </>
  );
}

export default App;
