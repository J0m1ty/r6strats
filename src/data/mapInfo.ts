export type MapPool = 'STANDARD' | 'QUICK MATCH' | 'RANKED' | 'TEAM DEATHMATCH';

export type MapData = {
    image: string;
    name: string;
    pools: MapPool[];
};

export type MapElement = {
    data: MapData;
    shown: boolean;
};

export const mapList: MapData[] = [
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
        pools: ['TEAM DEATHMATCH']
	},
	{
		image: '/maps/Clubhouse.avif',
		name: 'Clubhouse',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Coastline.avif',
		name: 'Coastline',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Consulate.avif',
		name: 'Consulate',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/EmeraldPlains.avif',
		name: 'Emerald Plains',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Favela.avif',
		name: 'Favela',
        pools: ['QUICK MATCH', 'TEAM DEATHMATCH']
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
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/NighthavenLabs.avif',
		name: 'Nighthaven Labs',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
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
        pools: ['STANDARD', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Stadium.avif',
		name: 'Stadium',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Themepark.avif',
		name: 'Themepark',
        pools: ['STANDARD', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Tower.avif',
		name: 'Tower',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Villa.avif',
		name: 'Villa',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Yacht.avif',
		name: 'Yacht',
        pools: ['QUICK MATCH']
	},
];