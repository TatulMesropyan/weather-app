import React from "react";
import {Box} from "@mui/material";

const WeatherPage = ({data}) => {
	console.log(data)
	return (
		<Box sx={{"margin": "0 40%", "textAlign": "center", "paddingTop": "15%", "position": 'fixed', 'zIndex': '3'}}>
			<div>
				{data.weather[0].description}
			</div>
			<div>
				{data.main.temp}
			</div>
			{data.wind.speed}
			{data.name}
		</Box>
	)
}
export default WeatherPage;