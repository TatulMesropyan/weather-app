import React, {useState} from "react";
import {useSpring, animated} from "react-spring";
import {Paper} from "@mui/material";
import Search from "./Components/Search/Search";
import WeatherPage from "./Components/WeatherPage";
import Background from './Components/Static/Background.png';

const App = () => {
	const [data, setData] = useState({})
	const [page, setPage] = useState(true)
	const animations = useSpring({
		opacity: page ? 1 : 0,
		y: page ? 0 : 24,
	})

	const paperContainer = {
		backgroundImage: `url(${Background})`,
		height: '100vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'fixed',
		left: 0,
		right: 0,
		zIndex: 1,
		display: 'block',
	};

	return (
		<Paper sx={paperContainer}>
			<animated.div style={animations}>
				<Search setData={setData} setPage={setPage}/>
			</animated.div>
			{!page && <WeatherPage data={data}/>}
		</Paper>
	);
}

export default App;
