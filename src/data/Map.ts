import { Room } from "./Room";

export type MapPool = "STANDARD" | "QUICK MATCH" | "RANKED" | "TEAM DEATHMATCH";

export abstract class Map {
    abstract pools: MapPool[];
    abstract spawns: string[];
    abstract rooms: Room[];
}