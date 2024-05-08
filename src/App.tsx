import { Box, Stack, Text } from "@chakra-ui/react";
import MapSelect from "./pages/MapSelect";
import { useState } from "react";
import { MapData } from "./data/mapInfo";
import OperatorSelect from "./pages/OperatorSelect";
import { OperatorData } from "./data/operatorInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mapList } from './data/mapInfo';

enum Step {
	MapSelect,
	OperatorSelect,
	StrategySelect
}

function App() {

	return (
		<div className="background">
			<BrowserRouter>
				<Routes>
					<Route index element={<MapSelect />}></Route>
					{mapList.map((map, index) =>{
						
						return(
							<Route key={index} path={map.name} element={<OperatorSelect mapData={map}/>}></Route>
						)
					})}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;
