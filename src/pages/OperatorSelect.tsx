import { Stack, Text } from "@chakra-ui/react";
import { OperatorData, OperatorSpecialty, OperatorType } from "../data/operatorInfo";
import ButtonSelectGroup from "../components/ButtonSelectGroup";
import BigButton from "../components/BigButton";
import { MapData } from "../data/mapInfo";

function OperatorSelect({ mapData }: { mapData: MapData }) {
    const onTypeSelect = (option: OperatorType | null) => {
        console.log(option);
    };

    const onSpecialtySelect = (option: OperatorSpecialty | null) => {
        console.log(option);
    };

    console.log(mapData)

    return (
        <Stack direction={'column'}>
            <Stack direction={'row'} spacing={5} justify={'center'} marginY={10}>
                <BigButton></BigButton>
                <BigButton></BigButton>
            </Stack>
            <Stack direction={'column'} spacing={0}>
                <Text fontSize={'24px'} fontFamily={'scoutcond'} textTransform={'uppercase'} color={'#fff'} textAlign={'center'}>
                    ADDITIONAL SPECIALITY FILTERS
                </Text>
                <ButtonSelectGroup<OperatorSpecialty> onSelect={onSpecialtySelect} options={['ANTI-ENTRY', 'ANTI-GADGET', 'BREACH', 'CROWD CONTROL', 'FRONT LINE', 'INTEL', 'MAP CONTROL', 'SUPPORT', 'TRAPPER']} />
            </Stack>
            GRID HERE
        </Stack>
    );
}

export default OperatorSelect;