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
		name: 'bank',
		pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Border.avif',
		name: 'border',
		pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Chalet.avif',
		name: 'chalet',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/CloseQuarter.avif',
		name: 'close-quarter',
        pools: ['TEAM DEATHMATCH']
	},
	{
		image: '/maps/Clubhouse.avif',
		name: 'clubhouse',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Coastline.avif',
		name: 'coastline',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Consulate.avif',
		name: 'consulate',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/EmeraldPlains.avif',
		name: 'emerald-plains',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Favela.avif',
		name: 'favela',
        pools: ['QUICK MATCH', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Fortress.avif',
		name: 'fortress',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Hereford.avif',
		name: 'hereford-base',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/House.avif',
		name: 'house',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Kafe.avif',
		name: 'kafe-dostoyevsky',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Kanal.avif',
		name: 'kanal',
        pools: ['QUICK MATCH', 'STANDARD', 'RANKED']
	},
	{
		image: '/maps/Lair.avif',
		name: 'lair',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/NighthavenLabs.avif',
		name: 'nighthaven-labs',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Oregon.avif',
		name: 'oregon',
        pools: ['STANDARD', 'RANKED']
	},
	{
		image: '/maps/Outback.avif',
		name: 'outback',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED']
	},
	{
		image: '/maps/Plane.avif',
		name: 'presidential-plane',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Skyscraper.avif',
		name: 'skyscraper',
        pools: ['STANDARD', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Stadium.avif',
		name: 'stadium',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Themepark.avif',
		name: 'themepark',
        pools: ['STANDARD', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Tower.avif',
		name: 'tower',
        pools: ['QUICK MATCH']
	},
	{
		image: '/maps/Villa.avif',
		name: 'villa',
        pools: ['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH']
	},
	{
		image: '/maps/Yacht.avif',
		name: 'yacht',
        pools: ['QUICK MATCH']
	},
];