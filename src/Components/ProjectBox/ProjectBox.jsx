import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({img, title, children, names}) => {
	return (
		<div className="projectBox_container flex">
			<img alt={title} className="projectBox_img" src={img}/>
			<div className="projectBox_content flex">
				<h2 className="projectBox_title">{title}</h2>
				<p className="projectBox_desc">{children}</p>
				<div className="projectBox_names">
					<h3 className="projectBox_header">By</h3>
					{
						names.map((elem, index) => <h5 key={index} className="projectBox_name">{elem}</h5>)
					}
				</div>
			</div>
		</div>
	);
};

export default ProjectBox;