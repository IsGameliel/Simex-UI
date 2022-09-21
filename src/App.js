import React from "react";
import {render} from "react-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Giftcards from "./components/Giftcards";
import Development from "./components/Development";
import Faq from "./components/Faq";
import Learn from "./components/Learn";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import Dashboard from "./components/Dashboard";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
// import PrivateRoute from './components/common/PrivateRoute';


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/giftcards' element={<Giftcards/>} />
                <Route path='/development' element={<Development/>} />
                <Route path='/faq' element={<Faq/>} />
                <Route path='/learn' element={<Learn/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </Router>
    );
}

export default App;
