import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import CreateListing from "./pages/CreateListing";
import Listing
 from "./pages/Listing";
function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path='/' element={<Explore/>} />
      <Route path='/offers' element={<Offers/>} />
      <Route path='/category/:categoryName' element={<Category/>} />
      <Route path='/profile' element={<PrivateRoute/>}>
      <Route path='/profile' element={<Profile/>} />
      </Route>
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/create-listing' element={<CreateListing/>} />
      <Route path='/category/:categoryName/:listingID' element={<Listing/>}/>
     </Routes>
     <Navbar/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
