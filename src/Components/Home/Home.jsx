import React from 'react';
import Box from '../Box/Box.jsx';
import APOD from '../APOD/APOD.jsx';
import "./Home.css";
import visionImg from './images/vision.jpg';
import obcImg from './images/obc.jpg';
import communicationImg from './images/communication.png';
import powerImg from './images/power.jpg';
import adcsImg from './images/adcs.jpg';
import structureImg from './images/structure.jpg';


const Home = () => {
	return (
		<>
			<div className="header_container">
				<div className="header_content">
					<div className="header_title">Team Pathik</div>
					<p className="header_text">Don't tell sky is the limit, when there are footprints on the moon.</p>
				</div>
			</div>
			<main className="main flex">
				<Box 
					title={"Vision"}
					img={visionImg}
					modifier={"--vision"}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
				<h1 className="title">Subsystems</h1>
				<Box 
					title={"OBCS"}
					img={obcImg}
				>An OBC primarily consists of a microprocessor, memory banks and interfacing chip to connect the computer to other sub-systems. It is the piece of hardware that runs the on-board software which controls the vital functions the system needs in order to perform effectively.
				</Box>
				<Box 
					title={"Communication"}
					img={communicationImg}
				>The Communication subsystem consists the hardware and software involved in the transmission and reception of signals, namely the antenna or antennas and the printed circuit board where the processing of the incoming and outgoing data takes place on board the satellite.
				</Box>
				<Box 
					title={"Structure"}
					img={structureImg}
				>The purpose of the structural subsystem is to provide a simple and robust structure that shall survive launch loads and provide a suitable environment for the operation of all subsystems. The structure mechanically supports all other spacecraft subsystems, attaches the spacecraft to the launch vehicle.
				</Box>
				<Box 
					title={"Power"}
					img={powerImg}
				>Power system is a vital subsystem, which provides the power required for working of a satellite. Mainly, the solar cells (or panels) and rechargeable batteries are used in these systems.
				</Box>
				<Box 
					title={"Attitude determination control system"}
					img={adcsImg}
					modifier={"--adcs"}
				>Altitude control subsystem takes care of the orientation of satellite in its respective orbit. It brings the satellite into correct orbit, whenever the satellite gets deviated from its orbit.
				</Box>
				<h1 className="title">Astronomy Picture of the Day</h1>
				<APOD />
			</main>
		</>
	);
};

export default Home;