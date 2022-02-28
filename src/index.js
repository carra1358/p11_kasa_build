import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./styles/index.scss"
import Home from './pages/Home';
import About from "./pages/About";
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Housing from "./pages/Housing"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="about" element={<About/>}/>
        <Route path="housing/:id/*" element={<Housing/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    <Footer/>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);


