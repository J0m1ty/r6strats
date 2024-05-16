import { AspectRatio, Box, Center, Grid, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { OperatorData, OperatorElement } from "../data/operatorInfo";

function OperatorGrid({ operators, onSelect }: { operators: OperatorElement[], onSelect: (operator: OperatorData) => void }){
    const columns = useBreakpointValue({ base: 7, sm: 4, md: 5, lg: 6, xl: 7 });

    return(
        <Center mb={100}>
            <Grid templateColumns={`repeat(${columns}, .6fr)`} gap={3} maxW={'1200px'} paddingX={50} gridColumnGap={"50px"} gridRowGap={"10px"}>
                {operators.map((operator, index) => {
                        if (!operator.shown) {
                            return null;
                        }

                        return(
                            <AspectRatio key={index} ratio={1 / 2 } cursor={'pointer'}
                            onClick={() => onSelect(operator.data)}
                            width="80px"
                            height="118px"
                            margin={"auto"}
                            _hover={{
                                transition: 'transform 0.3s ease',
                                transform: 'scale(1.1)',
                                transformOrigin: 'center',
                                '.operator-name-container': {
                                    bgColor: '#00fee5'
                                },
                                '.operator-gradient': {
                                    bgGradient: 'linear(to-t, rgb(0, 254, 229, 0.5), rgba(0, 0, 0, 0))'
                                }
                            }}>

                                <Stack direction={'column'} spacing={0}>
                                <Image
                                    src={operator.data.image}
                                    bgRepeat={'no-repeat'}
                                    width={"100%"}
                                    ></Image>
                                    <Box
                                        className={'operator-name-container'}
                                        bgColor={'#c3c3c3'}
                                        color={'#000'}
                                        w={'1000%'}
                                        h={'37px'}
                                    >
                                        <Text fontSize={'23px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'20px'} mt={2} textAlign={'center'}>
                                            {operator.data.name.replace("-", " ")}
                                        </Text>
                                    </Box>
                                    <Box
                                        className={'operator-gradient'}
                                        position={'absolute'}
                                        bottom={0}
                                        left={0}
                                        w={'100%'}
                                        h={'75%'}
                                    />
                                </Stack>
                            </AspectRatio>
                        )
                })}
            </Grid>
        </Center>
    )
}


export default OperatorGrid;