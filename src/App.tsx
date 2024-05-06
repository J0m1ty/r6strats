import { Box, Stack, Text } from "@chakra-ui/react";
import MapSelect from "./MapSelect";
import { useState } from "react";
import { MapData } from "./data/mapInfo";
import OperatorSelect from "./OperatorSelect";
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
		<Box
			bgImage={"url('/images/background.jpg')"}
			bgPos={'center'}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			minH={'100vh'}
            backgroundAttachment={'fixed'}
		>
			<Box
				position={'absolute'}
				right={0}
				bottom={0}
				bgImage={"url('/images/background-overlay.png')"}
				w={'100%'}
				h={'100%'}
				bgPos={'100% 100%'}
				bgRepeat={'no-repeat'}
				backgroundAttachment={'fixed'}
			>
			<Stack direction={'column'} spacing={25}>
				<Text fontSize={'80px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} mt={50} color={'#fff'} textAlign={'center'}>
					{step === Step.MapSelect ? 'SELECT A MAP' : 'SELECT AN OPERATOR'}
				</Text>
					{step === Step.MapSelect && <MapSelect onSelect={onMapSelect}/>}
					{step === Step.OperatorSelect && <OperatorSelect onSelect={onOperatorSelect}/>}
			</Stack>
			</Box>
		</Box>
	)
}

export default App;
