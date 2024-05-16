import { Stack, Text } from "@chakra-ui/react";
import { OperatorData, OperatorElement, OperatorSpecialty, OperatorType, operatorList } from "../data/operatorInfo";
import ButtonSelectGroup from "../components/ButtonSelectGroup";
import BigButton from "../components/BigButton";
import { MapData } from "../data/mapInfo";
import React, { useEffect, useRef, useState } from 'react';
import OperatorGrid from "../components/OperatorGrid";

function OperatorSelect({ mapData }: { mapData: MapData }) {

    let specialityFilter:OperatorSpecialty | null = null

    const [selectedOperatorType, setSelectedOperatorType] = useState<OperatorType>("attacker");

    const [ filterOptions, setFilterOptions ] = useState<OperatorSpecialty[]>(['INTEL', 'MAP CONTROL', 'ANTI-GADGET', 'BREACH', 'SUPPORT', 'FRONT LINE'])

    const [ operators, setOperators ] = useState<OperatorElement[]>(operatorList.map((operator) => {
		return {
			data: operator,
			shown: true
		};
	}));

    useEffect(() => {
        updateFilters()
    }, [selectedOperatorType])

    const updateFilters = () => {
        setOperators(operators.map((operator) => {
            let passesSpeciality = false
            if (!specialityFilter){
                passesSpeciality = true
            }
            else if (operator.data.specialties.includes(specialityFilter as OperatorSpecialty)){
                passesSpeciality = true
            }
            operator.shown = operator.data.type == selectedOperatorType && passesSpeciality
            return operator;
        }));
    }

    const specialityFilterGroup = useRef(null)

    const onTypeSelect = (option: OperatorType) => {
        setSelectedOperatorType(option)
        setFilterOptions(option == "attacker" ? ['INTEL', 'MAP CONTROL', 'ANTI-GADGET', 'BREACH', 'SUPPORT', 'FRONT LINE'] : ['INTEL', 'ANTI-ENTRY', 'ANTI-GADGET', 'TRAPPER', 'CROWD CONTROL', 'SUPPORT'])
        specialityFilter = null
        updateFilters()
    };

    const onSpecialtySelect = (option: OperatorSpecialty | null) => {
        specialityFilter = option
        updateFilters()
    };

    function operatorSelected(operator: OperatorData){
        window.location.href = "/" + mapData.name + "/" + operator.name
    }

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

                    <ButtonSelectGroup<OperatorSpecialty> onSelect={onSpecialtySelect} options={filterOptions} />
                    
                    <OperatorGrid operators={operators} onSelect={operatorSelected}></OperatorGrid>
                </Stack>
                GRID HERE
            </Stack>
        </Stack>
    );
}

export default OperatorSelect;