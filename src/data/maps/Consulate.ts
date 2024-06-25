import { Bombsite } from "../Bombsite";
import { Map, MapPool } from "../Map";
import { Room } from "../Room";

export const Bombsite1: Bombsite = new (class implements Bombsite {
    name: string = "2F Meeting & Office"
    id: number = 1;
})();

export const Consulate = new (class implements Map {
    pools: MapPool[] = ["STANDARD", "QUICK MATCH", "RANKED"];
    spawns: string[] = ["Riot Barricade", "Police Line", "Gas Station", "Side Street"];
    rooms: Room[] = [
        {
            name: "Meeting Room",
            floor: "2f",
            bombsite: Bombsite1,
            siteLetter: "A"
        },
        {
            name: "Consul Office",
            floor: "2f",
            bombsite: Bombsite1,
            siteLetter: "B"
        },
        {
            name: "Piano",
            floor: "1f",
            bombsite: true,
            siteLetter: "A"
        },
        {
            name: "Exbo",
            floor: "1f",
            bombsite: true,
            siteLetter: "B"
        },
        {
            name: "Tellers",
            floor: "1f",
            bombsite: true,
            siteLetter: "A"
        },
        {
            name: "Servers",
            floor: "1f",
            bombsite: true,
            siteLetter: "B"
        },
        {
            name: "Garage",
            floor: "B",
            bombsite: true,
            siteLetter: "A"
        },
        {
            name: "Cafeteria",
            floor: "B",
            bombsite: true,
            siteLetter: "B"
        }
    ]
});