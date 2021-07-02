import React from 'react';
import './Box.css';

const Box = ({ title, children , img, modifier}) => {
	return (
		<div className="box flex">
			<img alt={title} src={img} className="box_img" />
			<div className="box_content flex">
				<div className={`box_title ${modifier}`}>{title}</div>
				<div className="box_text">{children}</div>
			</div>
		</div>
	);
};

export default Box;