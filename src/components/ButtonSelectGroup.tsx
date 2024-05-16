import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Button from "./Button";

function ButtonSelectGroup<T extends string>({ onSelect, options }: { onSelect: (option: T | null) => void, options: T[] }) {
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

    useEffect(() => {
        setSelectedButton("");
        onSelect(null);
    }, [options])

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