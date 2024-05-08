import { Stack, Text } from "@chakra-ui/react";
import { OperatorData, OperatorSpecialty, OperatorType } from "../data/operatorInfo";
import ButtonSelectGroup from "../components/ButtonSelectGroup";
import BigButton from "../components/BigButton";
import { MapData } from "../data/mapInfo";
import { useState } from 'react';

function OperatorSelect({ mapData }: { mapData: MapData }) {
    const onTypeSelect = (option: OperatorType) => {
        setSelectedOperatorType(option)
    };

    const onSpecialtySelect = (option: OperatorSpecialty | null) => {
        console.log(option);
    };

    const [selectedOperatorType, setSelectedOperatorType] = useState<OperatorType>("attacker");

    console.log(mapData)

    return (
        <Stack direction={'column'} spacing={25}>
            <Text fontSize={'80px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} mt={50} color={'#fff'} textAlign={'center'}>SELECT AN OPERATOR</Text>
            <Stack direction={'column'}>
            <Stack direction={'row'} spacing={5} justify={'center'} marginY={10}>
                <BigButton onClick={() => onTypeSelect("attacker")} className="attacker-big-button" isActive={selectedOperatorType == "attacker"}>ATTACKER</BigButton>
                <BigButton onClick={() => onTypeSelect("defender")} className="defender-big-button" isActive={selectedOperatorType == "defender"}>DEFENDER</BigButton>
            </Stack>
            <Stack direction={'column'} spacing={0}>
                <Text fontSize={'24px'} fontFamily={'scoutcond'} textTransform={'uppercase'} color={'#fff'} textAlign={'center'}>
                    ADDITIONAL SPECIALITY FILTERS
                </Text>
                <ButtonSelectGroup<OperatorSpecialty> onSelect={onSpecialtySelect} options={['ANTI-ENTRY', 'ANTI-GADGET', 'BREACH', 'CROWD CONTROL', 'FRONT LINE', 'INTEL', 'MAP CONTROL', 'SUPPORT', 'TRAPPER']} />
            </Stack>
            GRID HERE
        </Stack>
        </Stack>
    );
}

export default OperatorSelect;