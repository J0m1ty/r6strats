import { Map, MapPool } from "../Map";
import { Room } from "../Room";

export const Consulate = new (class implements Map {
    pools: MapPool[] = ["STANDARD", "QUICK MATCH", "RANKED"];
    spawns: string[] = ["Riot Barricade", "Police Line", "Gas Station", "Side Street"];
    rooms: Room[] = [
        {
            name: "Meeting Room",
            floor: "2f",
            bombsite: true,
            id: 1,
            site: "A"
        },
        {
            name: "Consul Office",
            floor: "2f",
            bombsite: true,
            id: 1,
            site: "B"
        },
        {
            name: "Piano",
            floor: "1f",
            bombsite: true,
            id: 2,
            site: "A"
        },
        {
            name: "Exbo",
            floor: "1f",
            bombsite: true,
            id: 2,
            site: "B"
        },
        {
            name: "Tellers",
            floor: "1f",
            bombsite: true,
            id: 3,
            site: "A"
        },
        {
            name: "Servers",
            floor: "1f",
            bombsite: true,
            id: 3,
            site: "B"
        },
        {
            name: "Garage",
            floor: "B",
            bombsite: true,
            id: 4,
            site: "A"
        },
        {
            name: "Cafeteria",
            floor: "B",
            bombsite: true,
            id: 4,
            site: "B"
        }
    ]
});