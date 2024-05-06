import { AspectRatio, Box, Center, Grid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export type MapPools = 'STANDARD' | 'QUICK MATCH' | 'RANKED' | 'TEAM DEATHMATCH';

export type MapData = {
    image: string;
    name: string;
    pools: MapPools[];
};

export type MapElement = {
    data: MapData;
    shown: boolean;
};

function MapGrid({ maps }: { maps: MapElement[] }) {
    const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

    return (
        <Center mb={100}>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6} w={'100%'} maxW={'1600px'} paddingX={50}>
                {maps.map((map, index) => {
                    if (!map.shown) {
                        return null;
                    }

                    return (
                        <AspectRatio key={index} ratio={3 / 2}
                            _hover={{
                                transition: 'transform 0.3s ease',
                                transform: 'scale(1.1)',
                                transformOrigin: 'center',
                                '.map-name-container': {
                                    bgColor: '#00fee5'
                                },
                                '.map-gradient': {
                                    bgGradient: 'linear(to-t, rgb(0, 254, 229, 0.5), rgba(0, 0, 0, 0))'
                                }
                            }}
                        >
                            <Stack direction={'column'} spacing={0}>
                                <Box
                                    bgImage={`url('${map.data.image}')`}
                                    bgPos={'top left'}
                                    bgRepeat={'no-repeat'}
                                    bgSize={'cover'}
                                    w={'100%'}
                                    h={'calc(100% - 37px)'}
                                ></Box>
                                <Box
                                    className={'map-name-container'}
                                    bgColor={'#c3c3c3'}
                                    color={'#000'}
                                    w={'100%'}
                                    h={'37px'}
                                >
                                    <Text fontSize={'26px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'20px'} mt={2} textAlign={'center'}>
                                        {map.data.name}
                                    </Text>
                                </Box>
                                <Box
                                    className={'map-gradient'}
                                    position={'absolute'}
                                    bottom={0}
                                    left={0}
                                    w={'100%'}
                                    h={'75%'}
                                />
                            </Stack>
                        </AspectRatio>
                    );
                })}
            </Grid>
        </Center>
    )
}

export default MapGrid;