import React, { useState, useEffect } from 'react';
import './APOD.css';

const API_LINK = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;
 
const APOD = () => {
	
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [exp, setExp] = useState('');
	const [img, setImg] = useState('');
	const [loading, setLoading] = useState(false);

	const callApi = async () => {
		const response = await fetch(API_LINK);
		const data = await response.json();
		setLoading(true);
		// console.log(data);
		const {title, date, hdurl, explanation} = data;
		setImg(hdurl);
		setTitle(title);
		setDate(date);
		setExp(explanation);
	};

	useEffect(() => {
		callApi();
	},[]);
	
	return (
		<div className="APOD_container flex">
			{
				loading ?
					(
						<>
							<img src={img} alt="APOD" className="APOD_img"/>
							<div className="APOD_content flex">
								<h2 className="APOD_title">{title}</h2>
								<h4 className="APOD_date">{date}</h4>
								<p className="APOD_exp">{exp}</p>
							</div>
						</>
					) : (
						<h1>Loading...</h1>
					)
			}
		</div>
	);
};

export default APOD;

