import React ,{useState,  useEffect}  from 'react';

import './App.css';

import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about.js';
import Menu from './pages/menu.js';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact.js';

function App() {

   
const [isOpen, setIsOpen] = useState(false);

const toggle =  () => {
setIsOpen(!isOpen);
};

useEffect (() => {

  const hideMenu = () => {


    if(window.innerWidth > 768 && isOpen) {


      setIsOpen(false)
    }
  }



}) ;

return (
    <>
   <Navbar toggle={toggle} />
   <Dropdown isOpen={isOpen} toggle={toggle} />
    
    <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/menu' component={Menu} />
       <Route path='/about' component={About} />
       <Route path='/contact' component={Contact} />
    </Switch>
    <Footer />
    </>

  );
}

export default App;
