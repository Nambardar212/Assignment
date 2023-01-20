import React from 'react';
import "./Navbar.css";
import logo from "../Images/logo.png";


const Navbar = () => {
    return (
        <nav className='container'>
            <a href="/" className={`nav`}>
                <img src={logo} alt="Logo" />
            </a>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="sc-dlnjPT cuIYFB" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            <div className="navbar">
                <a href="/" className={`nav active`}>Home</a>
                <a href="/services" className={`nav`}>Services</a>
                <a href="/products" className={`nav`}>Products</a>
                <a href="/internship" className={`nav`}>AI Internship</a>
                <a href="/career" className={`nav`}>Career</a>
                <a href="/blog" className={`nav`}>Blog</a>
                <a href="/about" className={`nav`}>About</a>
                <a href="/contact" className={`nav`}>Contact us</a>
            </div>
        </nav >
    );
}

export default Navbar