import { MapData } from "../mapInfo";

export const sites: string[] = ["2f-Master Office-R6 Room"]
export type Site = typeof sites[number];

export const mapData: MapData = {
    name: "lair",
    pools: ["STANDARD", "QUICK MATCH", "RANKED", "TEAM DEATHMATCH"],
    spawns: [],
    rooms: [{
        name: "master-office",
        // site: "2f-Master Office-R6 Room",
        site: "",
        bomb: "A",
        floor: "second"
    }]
}