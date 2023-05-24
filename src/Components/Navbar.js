import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../stayle/main.css';
import { Link } from 'react-router-dom';
// import Heroslider from './Hero-slidere/Heroslider';
// import { useState,useEffect } from 'react';


const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	}
	return (
	<div>
		<div className='header'>
				<header>
			<div className="logo">
                <  img src={require("../image/logo 1.png")}/>
                </div>
			<nav ref={navRef}>
				<ul className='navbar__ul'>
				<a href="/">Home</a>
				<a href="/About">About</a>
				<a href="/Work">Work</a>
                <a href="/ContactUs">ContactUs </a>
				
				
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
			
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>

  </div>
		
	</div>

	
	);
}


export default Navbar;