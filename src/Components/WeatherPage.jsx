import React from "react";

const WeatherPage = ({data}) => {

	const TempratureCalculator = () => {
		return Math.floor(data.main.temp);
	}

	return (
		<>
			<div>
				{data.weather[0].main}
				{data.weather[0].description}
			</div>
			<div>
				<TempratureCalculator/>
			</div>
			Temperature is {data.wind.speed} km/h
			<div>
			{data.name}
			</div>
		</>
	)
}
export default WeatherPage;