import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Button from "./Button";
import { MapPools } from "./MapGrid";

function ButtonSelectGroup({ onSelect, options }: { onSelect: (option: MapPools | null) => void, options: MapPools[] }) {
    const [selectedButton, setSelectedButton] = useState("");

    const handleButtonClick = (index: number) => {
        const option = options[index];

        if (selectedButton === option) {
            setSelectedButton("");
            onSelect(null);
            return;
        }

        setSelectedButton(option);
        onSelect(option);
    };

    return (
        <Flex wrap={'wrap'} justifyContent={'center'}>
            {options.map((option, index) => {
                return (
                    <Button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        isActive={selectedButton === option}
                    >
                        {option}
                    </Button>
                )
            })}
        </Flex>
    );
}

export default ButtonSelectGroup;