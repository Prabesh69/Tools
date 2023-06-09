import React, { useState, useEffect } from 'react';
import './Home.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import { FaSearch } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';

 

function Navbar() {

  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
       const currentDate = new Date().toLocaleDateString([], {  month: 'long', day: 'numeric' });
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentDateTime(`${currentDate}-${currentTime}`);
    }, 1000);
 

    return () => {
      clearInterval(timer);
    };
  }, []);
  function doublef(){
 if(!isSearchVisible){
  return `visible`
 }else{
  return `not-visible`
 }
   

  }
  function search(){
    console.log("hello")
  }

  return (
    <nav className="navbar">
      
      
        <div className="login"><span className="log"><CgProfile size={35}/> </span> <a href="" rel='' className='p'>Sign-in</a> </div>
          <span className="logo">SKY-NEWS</span>
        <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="toggle-icon"><GiHamburgerMenu size={35}/></span>
        </button>
      
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
     
        <li className={doublef()}><a href="#">Home</a></li>
        <li className={doublef()}><a href="#">Politics</a></li>
        <li className={doublef()}><a href="#">Sports</a></li>
        <li className={doublef()}><a href="#">World</a></li>
        <li className={doublef()}><a href="#">Weather</a></li>

        <li>
          
          <div className="search-bar">
          
        {isSearchVisible && (
          <form action="" className='form'>
        <RxCross2 onClick={toggleSearch} className='search-cross' size={20}/>
             <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          </form>
        )}
        <FaSearch onClick={!isSearchVisible ? toggleSearch : search} size={20} />
      </div>
            
             </li>
        <RxCross2 onClick={toggleMenu} className="button-icon" size={30}/>
      </ul>
    </nav>
  );
}

export default Navbar;
