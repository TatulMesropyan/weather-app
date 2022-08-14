import React, {useEffect, useState} from "react";
import axios from "axios";
import {Box, Button, Grid, TextField} from "@mui/material";

function App() {
	const [data, setData] = useState({})
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const location = `${city},${country}`
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dc97e894c5d1389bd78904bb5cd1d0d3`

	const getData = () => {
		axios.get(url)
			.then(res => {
				const apiData = res.data;
				setData({apiData});
				setCity('')
				setCountry('')
			})
			.catch(error => console.error('Alert data not found'))
	}
	useEffect(() => {
		console.log(data)
	}, [data])
	return (
		<div className='flex-container'>
			<TextField value={city} fullWidth onChange={(e) => setCity(e.target.value)} label='City'/>
			<TextField value={country} fullWidth onChange={(e) => setCountry(e.target.value)} label='Country'/>
			<Button onClick={getData}>Submit</Button>
		</div>
	);
}

export default App;
