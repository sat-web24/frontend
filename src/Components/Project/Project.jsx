import React from 'react';
import ProjectBox from '../ProjectBox/ProjectBox';

import './Project.css';

import radarImg from './images/radar.jpg';
import voiceRobotImg from './images/voiceRobot.jpg';
import selfBalanceRobotImg from './images/selfBalanceRobot.jpg';
import doorLockImg from './images/doorLock.jpg';
import solarTrackerImg from './images/solarTracker.jpg';
import inverterImg from './images/inverter.jpg';

const Project = () => {
	return (
		<div className="project">
			<h1 className="project_title">Projects</h1>
			<div className="project_list flex">
				<ProjectBox  
					title={"Voice controlled car"}
					img={voiceRobotImg}
					names={["Prashant Rai"]}
				>This project focuses on the concept of how a robot can be controlled by the human voice. In this system, an android app is used as a medium for the transmission of human commands to microcontroller. The speech is received by the android app and processed by the voice module. Voice is then converted to text. The microcontroller will further process this text, which will take suitable action to regulate the robot.
				</ProjectBox>
				<ProjectBox  
					title={"Self balancing robot"}
					img={selfBalanceRobotImg}
					names={["Prashant Rai"]}
				>The bot is kept balanced through the correction provided by the wheels which goes against the direction of fall. The current orientation of the bot is monitored by the MPU6050. The orientation is constantly compared to a desired orientation through a PID loop. The bot is steady when the current orientation is equal to the desired orientation.
				</ProjectBox>
				<ProjectBox  
					title={"Radar"}
					img={radarImg}
					names={["Prashant Rai"]}
				>This project implements a radar using an arduino and ultrasonic sensor. There are three basic components. First is sonar sensor which transmit ultrasonic sound waves in order to calculate distance. Second is arduino which proceses the data recieved from sensor. Third is servo motor which revolves with in a particular degree and helps the radar to detect objects.
				</ProjectBox>
				<ProjectBox  
					title={"A Highly Efficient and Reliable Inverter Configuration Based Cascaded Matrix Inverter for Pv System"}
					img={inverterImg}
					names={["Manoj Kumar Yadav"]}
				>This paper presents an improved Cascaded Multi-Level Inverter (CMLI) based on a highly efficient and reliable configuration for the minimization of the leakage current. Apart from a reduced switch count, the proposed scheme has additional features of low switching and conduction losses. The proposed topology with the given PWM technique reduces the high-frequency voltage transitions in the terminal and common-mode voltages. Avoiding high-frequency voltage transitions achieves the minimization of the leakage current and reduction in the size of EMI filters.
				</ProjectBox>
				<ProjectBox  
					title={"Solar tracker"}
					img={solarTrackerImg}
					names={["Manoj Kumar Yadav"]}
				>Renewable energy resources are getting priorities in the whole world to lessen the dependency on conventional resources. Solar energy is rapidly gaining the focus as an important means of expanding renewable energy uses. Solar cells those convert sun’s energy into electrical energy are costly and inefficient. Solar tracking system is the most appropriate technology to enhance the efficiency of the solar cells by tracking the sun. A microcontroller based design methodology of an automatic solar tracker is presented in this project. Light dependent resistors are used as the sensors of the solar tracker.
				</ProjectBox>
				<ProjectBox  
					title={"Biometric door lock"}
					img={doorLockImg}
					names={["Abhishek Bhai Patel", "Anurag Sahu"]}
				>Lock itself is designed and developed by our team members, namely, Abhishek Bhai Patel and Anurag Sahu. The project contains Arduino UNO, a fingerprint sensor of storing capacity of upto 128 fingerprints, two DC motors mounted on doors, a single 5V BO-DC motor in the lock, and other miscellaneous components. This whole is a feedback-controlled system with three alert LEDs signalling ON, OFF and both functions respectively. This system is designed in a manner such that the person inside the room can control it in all aspects, making it highly secure. The mechanical structure of the lock can handle the extreme pressure of hammer more than thrice.
				</ProjectBox>
			</div>
		</div>
	);
};

export default Project;