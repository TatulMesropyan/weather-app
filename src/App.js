import React, {useState} from "react";
import './App.css';
import Search from "./Components/Search/Search";
import {Box} from "@mui/material";
import {useSpring, animated} from "react-spring";

function App() {
	const [data, setData] = useState({})
	const [page, setPage] = useState(true)
	const animations = useSpring({
		opacity: page ? 1 : 0,
		y: page ? 0 : 24,
	})
	return (
		<Box sx={{'height': '100vh'}}>
			<div className='background-wrap'></div>
			<animated.div style={animations}>
				<Search setData={setData}/>
			</animated.div>
		</Box>
	);
}

export default App;
