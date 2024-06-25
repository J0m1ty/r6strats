import { Room } from "./Room";

export type MapPool = "STANDARD" | "QUICK MATCH" | "RANKED" | "TEAM DEATHMATCH";
export type Floor = "EXT" | "B" | "1F" | "2F" | "3F";
export type Rooms = Partial<Record<Floor, (string | Room)[]>>;

export abstract class Map {
    abstract pools: MapPool[];
    abstract spawns: string[];
    abstract rooms: Rooms;
    abstract sites: Room[];
}