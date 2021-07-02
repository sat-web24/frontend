import React from 'react';
import './SocialMedia.css';

const SocialMedia = ({ Logo, text, link }) => {
	return (
		<div className="social flex">
			<Logo className="social_logo" />
			<a className="social_link" rel="noopener noreferrer" href={link} target="_blank">{text}</a>
		</div>
	);
};

export default SocialMedia;