import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar";
import * as React from "react";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

// images

function App() {
    return (
        <div className="w-full h-screen bg-gray-200">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgotpassword" element={<Forgotpassword />} />
                    <Route exact path="/linkedin" component={LinkedInCallback} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
