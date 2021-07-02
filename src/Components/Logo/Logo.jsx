import React from 'react';
import { ReactComponent as SATlogo } from './images/logo.svg';
import './Logo.css';
const Logo = () => {
	return (
		<div className="logo flex">
			<SATlogo className="logo_img" />
			<h1 className="logo_text">SATLAB</h1>
		</div>
	);
};

export default Logo;