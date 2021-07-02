import React from 'react';
import { Link } from 'react-router-dom'; 
import SocialMedia from '../SocialMedia/SocialMedia';

import './Footer.css';

import { ReactComponent as Instagram } from './image/instagram.svg';
import { ReactComponent as Linkedin } from './image/linkedin.svg';
import { ReactComponent as Facebook } from './image/facebook.svg';

const Footer = () => {
	return (
		<>
			<div className="divider"></div>
			<footer className="footer flex">
				<div className="media flex">
					<h2 className="media_title">SATLAB</h2>
					<div className="social_links flex">
						<SocialMedia 
							text={"Instagram"}  
							Logo={Instagram}
							link={"https://www.instagram.com/sat_lab/"} 
						/>
						<SocialMedia 
							text={"Linkedin"}  
							Logo={Linkedin}
							link={"https://www.linkedin.com/in/sat-lab-team-pathik-0161391b0/"} 
						/>
						<SocialMedia 
							text={"Facebook"}  
							Logo={Facebook}
							link={"https://www.facebook.com/Satlab-119728073227054/"} 
						/>					
					</div>
				</div>
				<div className="sitemap flex">
					<h2 className="sitemap_title">Sitemap</h2>
					<Link to="/" className="sitemap_link">Home</Link>
					<Link to="/gallery" className="sitemap_link">Gallery</Link>
					<Link to="/projects" className="sitemap_link">Projects</Link>
					<Link to="/contact" className="sitemap_link">Contact Us</Link>
					<Link to="/about" className="sitemap_link">About Us</Link>
				</div>
				<div className="newsletter flex">
					<h3 className="newsletter_title">Newsletter</h3>
					<input type="text" className="newsletter_input" placeholder="Enter your email" />
					<button className="newsletter_button">Subscribe</button>
				</div>
			</footer>
		</>
	);
};

export default Footer;