import { Box, Stack, Text } from "@chakra-ui/react";
import MapSelect from "./pages/MapSelect";
import { useState } from "react";
import { MapData } from "./data/mapInfo";
import OperatorSelect from "./pages/OperatorSelect";
import { OperatorData } from "./data/operatorInfo";

enum Step {
	MapSelect,
	OperatorSelect,
	StrategySelect
}

function App() {
	const [ step, setStep ] = useState<Step>(Step.MapSelect);

	const onMapSelect = (map: MapData) => {
		console.log(map);
		setStep(Step.OperatorSelect);
	};

	const onOperatorSelect = (operator: OperatorData) => {
		console.log(operator);
		setStep(Step.StrategySelect);
	};

	return (
		<div className="background">
			<Stack direction={'column'} spacing={25}>
				<Text fontSize={'80px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} mt={50} color={'#fff'} textAlign={'center'}>
					{step === Step.MapSelect ? 'SELECT A MAP' : 'SELECT AN OPERATOR'}
				</Text>
					{step === Step.MapSelect && <MapSelect onSelect={onMapSelect}/>}
					{step === Step.OperatorSelect && <OperatorSelect onSelect={onOperatorSelect}/>}
			</Stack>
		</div>
	)
}

export default App;
