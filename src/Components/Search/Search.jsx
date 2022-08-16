import React, {useState} from "react";
import axios from "axios";
import {Box, Button, TextField, Typography} from "@mui/material";

const Search = ({setData,setPage}) => {
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const location = `${city},${country}`
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dc97e894c5d1389bd78904bb5cd1d0d3`

	const getData = async () => {
		await axios.get(url)
			.then(res => {
				setData(res.data);
				setCity('')
				setCountry('')
				setPage(false);
			})
			.catch(() => console.error('Alert data not found'))
	};

	return (
		<Box sx={{"margin": "0 40%", "textAlign": "center", "paddingTop": "15%", "position": 'fixed', 'zIndex': '3'}}>
			<Typography variant='h3' fontStyle='italic'>
				Weather
			</Typography>
			<TextField value={city} variant="standard" fullWidth onChange={(e) => setCity(e.target.value)} label='City'
					   sx={{"marginBottom": "10px", "marginTop": "10px"}} placeholder='Yerevan'/>
			<TextField value={country} variant="standard" fullWidth onChange={(e) => setCountry(e.target.value)}
					   label='Country' sx={{"marginBottom": "10px"}} placeholder='Armenia'/>
			<Button onClick={getData} color='warning' fullWidth variant='text'>Submit</Button>
		</Box>
	)
};
export default Search;