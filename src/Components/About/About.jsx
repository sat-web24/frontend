import React from 'react';
import './About.css';

const About = () => {
	return (
		<div className="about">
			<h1 className="about_title">About us</h1>
			<p className="about_content">We are a team called ‘TEAM PATHIK’ aiming to design and develop a CubeSat for detecting forest fires at a minimal early stage as possible for a particular region.<br/><br/>It is an indispensable initiative to develop a payload which is compatible for 1U CubeSat for the early forest fire detection caused naturally.<br/><br/>While undergoing this whole process, we organise various events like workshops, webinars and quizzes based on ‘Space, Science and Technology’ to spread some knowledge among students regarding the immense deep sea of space science.<br/><br/>We have worked on drones too. Even the first successful flight of an air-borne device in Meerut Institute of Engineering and Technology was done by our lab! And we are in the process of improvising and implementing different applications of the drone.<br/><br/>Paul Brandt has said,<br/><span className="about_thought">“Don't tell me the sky's the limit when there are footprints on the moon.”</span><br/>Our main focus is on designing a CubeSat and we are working in this direction. We have taken this initiative and many more are yet to come.</p>
		</div>
	);
};

export default About;