import React from 'react';
import "./Contact.css";
import { ReactComponent as IMG } from './images/img.svg';
import { ReactComponent as EMAIL } from './images/email.svg';
import { ReactComponent as LOCATION } from './images/location.svg';


const Contact = () => {
	return (
		<div className="contact">
			<h1 className="contact_title">Contact us.</h1>	
			<IMG className="contact_img" />
			<div className="contact_content">
				<div className="contact_container flex">
					<div className="contact_header flex">
						<EMAIL className="contact_icon" />
						<h3 className="contact_heading">Mail</h3>
					</div>
					<span><a className="contact_link" href="mailto:satellite.club@miet.ac.in" target="_self">satellite.club@miet.ac.in</a></span>
				</div>
				<div className="contact_container flex">
					<div className="contact_header flex">
						<LOCATION className="contact_icon" />
						<h3 className="contact_heading">Address</h3>
					</div>
					<span className="contact_address">N.H. 58, Delhi-Roorkee Highway, Baghpat Bypass Road Crossing-250005, Meerut, Uttar Pradesh, India</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;