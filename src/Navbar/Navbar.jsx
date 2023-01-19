import React from 'react';
import "./Navbar.css";
import logo from "../Images/logo.png";
import { useState } from 'react';

const Navbar = () => {
    const [flag, setFlag] = useState(true);

    const handleServices = () => {
        setFlag(!flag);
    }

    const handleProduct = () => {

    }
    const handleInternship = () => {
        
    }
    const handleCareer = () => {
        
    }
    const handleBlog = () => {
        
    }
    const handleAbout = () => {
        
    }
    const handleContact = () => {
        
    }
    const handleHome = () => {
        
    }
    return (
        <nav className='container'>
            <a href="/" className={`nav`}>
                <img src={logo} alt="Logo" />
            </a>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="sc-dlnjPT cuIYFB" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            <div className="navbar">
                <a href="/" className={`nav ${flag ? 'active' : ""}`} onClick={handleHome}>Home</a>
                <a href="/services" className={`nav ${flag ? '' : "active"}`}  onClick={handleServices}>Services</a>
                <a href="/products" className={`nav ${flag ? '' : ""}`}  onClick={handleProduct}>Products</a>
                <a href="/internship" className={`nav ${flag ? '' : ""}`}  onClick={handleInternship}>AI Internship</a>
                <a href="/career" className={`nav ${flag ? '' : ""}`}  onClick={handleCareer}>Career</a>
                <a href="/blog" className={`nav ${flag ? '' : ""}`}  onClick={handleBlog}>Blog</a>
                <a href="/about" className={`nav ${flag ? '' : ""}`}  onClick={handleAbout}>About</a>
                <a href="/contact" className={`nav ${flag ? '' : ""}`}  onClick={handleContact}>Contact us</a>
            </div>
        </nav >
    );
}

export default Navbar