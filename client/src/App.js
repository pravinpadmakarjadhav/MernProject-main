
import React from 'react';
import {Route} from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <Navbar/>

<Route path="/">
<Home/>
</Route>

<Route exact path="/about">
<About/>
</Route>

 <Route path="/contact">
<Contact/>
</Route>

<Route path="/login">
<Login/>
</Route>

<Route path="/signup">
<Signup/>
</Route>
    </>
  );
}

export default App;
