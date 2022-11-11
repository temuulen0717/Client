import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/Components/Navbar";
import Trip from "/Components/Main/main";
import Login from "/Components/Login/login";
import SignUp from "/Components/Signup/index";
import Tip from "/Components/Tip";
import Body from "/Components/Body/Body";
import Footer from "/Components/Footer/footer";
import Last from "/Components/Lastbanner/Last";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Navbar />
      <Routes>
        {user && <Route exact path="/Trip" element={<Trip />} />}

        <Route exact path="/Login" element={<Login />} />

        <Route exact path="/SignUp" element={<SignUp />} />

        <Route exact path="/Tip" element={<Tip />} />
      </Routes>
      <Body />
      <Footer />
      <Last />
    </Router>
  );
}

export default App;
