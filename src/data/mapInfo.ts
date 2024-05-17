import { Room, Site, Spawn } from "./locationInfo";

export type MapElement = {
    data: MapData;
    shown: boolean;
};

export const mapNames = ["yacht", "villa", "tower", "themepark", "stadium", "skyscraper", "presidential-plane", "outback", "oregon", "nighthaven-labs", "lair", "kanal", "bank", "border", "chalet", "close-quarter", "clubhouse", "coastline", "consulate", "emerald-plains", "favela", "fortress", "hereford-base", "house", "kafe-dostoyevsky"] as const;
export type MapName = typeof mapNames[number];

export const mapPools = ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"] as const;
export type MapPool = typeof mapPools[number];

export type MapData = {
    name: MapName;
    pools: MapPool[];
    spawns: Spawn[];
	rooms: Room[];
};

export const mapList: MapData[] = [
	{
		name: "bank",
		pools: ["STANDARD", "QUICK MATCH", "RANKED"],
		sites: ["2f-room1-room2"],
		spawns: [],
		rooms: [{
			name: "exampleroom",
			site: "2f-room1-room2",
			bomb: "A",
			floor: "second"
		}]
	},
	{
		name: "border",
		pools: ["STANDARD", "QUICK MATCH", "RANKED"]
	},
	{
		name: "chalet",
        pools: ["STANDARD", "QUICK MATCH", "RANKED"]
	},
	{
		name: "close-quarter",
        pools: ["TEAM DEATHMATCH"]
	},
	{
		name: "clubhouse",
        pools: ["STANDARD", "QUICK MATCH", "RANKED"]
	},
	{
		name: "coastline",
        pools: ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "consulate",
        pools: ["STANDARD", "QUICK MATCH", "RANKED"]
	},
	{
		name: "emerald-plains",
        pools: ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "favela",
        pools: ["QUICK MATCH", "TEAM DEATHMATCH"]
	},
	{
		name: "fortress",
        pools: ["QUICK MATCH"]
	},
	{
		name: "hereford-base",
        pools: ["QUICK MATCH"]
	},
	{
		name: "house",
        pools: ["QUICK MATCH"]
	},
	{
		name: "kafe-dostoyevsky",
        pools: ["STANDARD", "QUICK MATCH", "RANKED"]
	},
	{
		name: "kanal",
        pools: ["QUICK MATCH", "STANDARD", "RANKED"]
	},
	{
		name: "lair",
        pools: ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "nighthaven-labs",
        pools: ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "oregon",
        pools: ["STANDARD", "RANKED"]
	},
	{
		name: "outback",
        pools: ["STANDARD", "QUICK MATCH", "RANKED"]
	},
	{
		name: "presidential-plane",
        pools: ["QUICK MATCH"]
	},
	{
		name: "skyscraper",
        pools: ["STANDARD", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "stadium",
        pools: ["QUICK MATCH"]
	},
	{
		name: "themepark",
        pools: ["STANDARD", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "tower",
        pools: ["QUICK MATCH"]
	},
	{
		name: "villa",
        pools: ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"]
	},
	{
		name: "yacht",
        pools: ["QUICK MATCH"]
	},
];