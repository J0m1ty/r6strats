import { Box } from "@chakra-ui/react";
import React from "react";

function Button({ children, isActive, onClick }: { children: React.ReactNode; isActive: boolean; onClick: () => void }) {
    return (
        <Box
            as={'button'}
            onClick={onClick}
            bgColor={isActive ? '#00ffe5' : 'rgba(0, 0, 0, 0)'}
            color={isActive ? '#24262a' : '#fff'}
            boxSizing={'border-box'}
            cursor={'pointer'}
            fontFamily={'roboto'}
            fontSize={'14px'}
            border={'1px solid'}
            borderColor={isActive ? '#00ffe5' : 'rgba(255, 255, 255)'}
            padding={'6px 10px 4px 10px'}
            margin={'4px 6px 4px 6px'}
            _hover={isActive ? {} : {
                bgColor: 'hsla(0, 0%, 100%, .5)',
                color: '#24262a',
                textShadow: 'none',
                transition: 'all .2s ease-in-out'
            }}
        >
            {children}
        </Box>
    );
}

export default Button;