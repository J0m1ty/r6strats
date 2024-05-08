import { Box, Button, Text } from "@chakra-ui/react"
import { OperatorType } from "../data/operatorInfo";

function BigButton({ children, onClick, isActive, className }: { children: React.ReactNode; onClick: () => void; isActive: boolean; className?: string }) {
    return (
        <Box
        as={'button'}
        onClick={onClick}
        bgColor={'#2499ff'}
        color={'#24262a'}
        boxSizing={'border-box'}
        cursor={'pointer'}
        fontFamily={'scoutcond'}
        fontWeight={'400'}
        fontSize={'24px'}
        border={'0'}
        padding={'10px'}
        margin={'10px'}
        display={"inline-flex"}
        justifyContent={'center'}
        position={"relative"}
        borderBottom='5px solid #2499ff'
        borderColor={isActive ? '#00ffe5' : ""}
        _hover={{
            transition: 'background .15s ease-in',
            borderColor: '#00ffe5',
            _before: {
                opacity: "1"
            }
            
        }}
        _before={{
            content: '""',
            position: "absolute",
            opacity: isActive ? "1" : "0",
            top: "0",
            left: "0",
            width: '100%',
            height: '100%',
            background: 'linear-gradient(0deg, rgba(0, 255, 230, .5), rgba(0, 255, 230, 0) 50%)',
            transition: 'opacity .15s ease-in'
        }}
        className={`big-button ${className == undefined ? "" : className}`}
    >
        <Text
        as={"span"}
        transition="transform .15s ease-in"
        className="big-button-span"
        display= "flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        transform={isActive ? "scale(1.1)" : "scale(1)"}
        >{children}</Text>
        
    </Box>
    )
}

export default BigButton