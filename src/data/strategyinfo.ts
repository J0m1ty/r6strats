import { Room, Site, Spawn, Floor } from "./locationInfo";
import { MapData } from "./mapInfo";
import { OperatorData, OperatorPosition } from "./operatorInfo";

// Filters
export type MapFilter = MapData | MapData[] | ((maps: MapData[]) => (MapData | MapData[]));
export type OperatorFilter<T extends OperatorPosition> = OperatorData<T> | OperatorData<T>[] | ((ops: OperatorData<T>[]) => (OperatorData<T> | OperatorData<T>[]));
export type AttackerLocationFilter = Spawn | Spawn[] | "anywhere";
export type DefenderLocationFilter = Room | Room[] | Site | Site[] | Floor | ((rooms: Room[]) => (Room | Room[])) | ((sites: Site[]) => (Site | Site[])) | "anywhere";

// Strategies
export type Strategy<T extends OperatorPosition> = {
    nickname?: string;
    map: MapFilter;
    operator: OperatorFilter<T>;
    location: T extends "attacker" ? AttackerLocationFilter : T extends "defender" ? DefenderLocationFilter : never;
    tags: string[];
    source: `https://${string}`;
};