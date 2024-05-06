import { Box, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import ButtonSelectGroup from './components/ButtonSelectGroup';
import MapGrid, { MapData, MapElement, MapPools } from './components/MapGrid';
import { useState } from 'react';

const mapList: MapData[] = [
	{
		image: '/maps/Bank.avif',
		name: 'Bank',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Border.avif',
		name: 'Border',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Chalet.avif',
		name: 'Chalet',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/CloseQuarter.avif',
		name: 'Close Quarter',
        pools: []
	},
	{
		image: '/maps/Clubhouse.avif',
		name: 'Clubhouse',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Coastline.avif',
		name: 'Coastline',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Consulate.avif',
		name: 'Consulate',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/EmeraldPlains.avif',
		name: 'Emerald Plains',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Favela.avif',
		name: 'Favela',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Fortress.avif',
		name: 'Fortress',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Hereford.avif',
		name: 'Hereford Base',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/House.avif',
		name: 'House',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Kafe.avif',
		name: 'Kafe Dostoyevsky',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Kanal.avif',
		name: 'Kanal',
        pools: ['QUICK MATCH', 'STANDARD', 'RANKED']
	},
	{
		image: '/maps/Lair.avif',
		name: 'Lair',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/NighthavenLabs.avif',
		name: 'Nighthaven Labs',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Oregon.avif',
		name: 'Oregon',
        pools: ['STANDARD', 'RANKED']
	},
	{
		image: '/maps/Outback.avif',
		name: 'Outback',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Plane.avif',
		name: 'Presidential Plane',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Skyscraper.avif',
		name: 'Skyscraper',
        pools: ['STANDARD', 'RANKED']
	},
	{
		image: '/maps/Stadium.avif',
		name: 'Stadium',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Themepark.avif',
		name: 'Themepark',
        pools: ['STANDARD', 'RANKED']
	},
	{
		image: '/maps/Tower.avif',
		name: 'Tower',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Villa.avif',
		name: 'Villa',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Yacht.avif',
		name: 'Yacht',
        pools: ['QUICK MATCH']
	},
];

function App() {
	const [ maps, setMaps ] = useState<MapElement[]>(mapList.map((map) => {
		return {
			data: map,
			shown: true
		};
	}));

	const displayValue = useBreakpointValue({ base: false, md: true });

	const onFilterSelect = (option: MapPools | null) => {
        setMaps(maps.map((map) => {
            if (!option) {
                map.shown = true;
                return map;
            }
            
            map.shown = map.data.pools.includes(option);
            return map;
        }));
	};

	return (
		<Box
			bgImage={"url('/background.jpg')"}
			bgPos={'center'}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			minH={'100vh'}
            backgroundAttachment={'fixed'}
		>
			<Stack direction={'column'} spacing={'50px'}>
				<Text fontSize={'80px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} mt={50} color={'#fff'} textAlign={'center'}>
					SELECT A MAP
				</Text>
				<Stack direction={'column'} spacing={0}>
					<Text fontSize={'50px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} color={'#fff'} textAlign={'center'}>
						{displayValue ? 'OPERATION DEADLY OMEN - ' : ''}PLAYLIST FILTERS
					</Text>
					<Box paddingX={10}>
						<ButtonSelectGroup onSelect={onFilterSelect} options={['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']} />
					</Box>
				</Stack>
				<MapGrid maps={maps} />
			</Stack>
		</Box>
	)
}

export default App;
