import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import './Nav.css';

const Nav = () => {

	const [nav, setNav] = useState(false);

	const toggleHamburger = event => {
		event.target.classList.toggle('open'); 
		document.querySelector('.nav_items').classList.toggle('open'); 
	};

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 80) {
			setNav(true);
		} else {
			setNav(false);
		}
	});

	return (
		<nav className={nav ? "nav flex active" : "nav flex"}>
			<Link to="/"><Logo /></Link>
			<ul className="nav_items flex">
				<Link className="nav_link" to="/"><li className="nav_item" onClick={toggleHamburger}>Home</li></Link>
				<Link className="nav_link" to="/gallery"><li className="nav_item" onClick={toggleHamburger}>Gallery</li></Link>
				<Link className="nav_link" to="/projects"><li className="nav_item" onClick={toggleHamburger}>Projects</li></Link>
				<Link className="nav_link" to="/contact"><li className="nav_item" onClick={toggleHamburger}>Contact us</li></Link>
				<Link className="nav_link" to="/about"><li className="nav_item" onClick={toggleHamburger}>About us</li></Link>
			</ul>
			<div className="hamburger" onClick={toggleHamburger} >
				<div className="hamburger_lines"></div>
			</div>
		</nav>
	);
};

export default Nav;