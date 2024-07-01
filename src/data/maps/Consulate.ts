import { Map, MapPool, Rooms } from "../Map";
import { Room } from "../Room";

export const Consulate = new (class implements Map {
    pools: MapPool[] = ["standard", "quick match", "ranked"];
    spawns = ["Riot Barricade", "Police Line", "Gas Station", "Side Street"];
    rooms: Rooms = {
        "2F": [
            { name: "Meeting Room", site: { bomb: { id: 1, name: "2F Consul Office & 2F Meeting Room", letter: "A" }, hostage: { id: 2 }, secure: { id: 1 } } },
            { name: "Consul Office", site: { bomb: { id: 1, name: "2F Consul Office & 2F Meeting Room", letter: "B" }, hostage: { id: 1 } } },
            "Administration Office",
            "Meeting Hallway",
            "Consul Side Room",
            "Catering",
            "Bathroom",
            "Reception",
            "Copy Room",
            "Break Room",
            "Manager's Office",
            "Secretary",
            "Hallway",
            "Exit Stairs"
        ],
        "1F": [
            { name: "Piano Room", site: { bomb:  { id: 2, name: "1F Exposition Room & 1F Piano Room", letter: "A" } } },
            { name: "Exposition Room", site: { bomb: { id: 2, name: "1F Exposition Room & 1F Piano Room", letter: "B" } } },
            { name: "Tellers", site: { bomb: { id: 3, name: "B Servers & 1F Tellers", letter: "A" }, hostage: { id: 3 } } },
            { name: "Visa Office", site: { secure: { id: 2 } } },
            "Closet",
            "Lobby",
            "Main Entrance",
            "Lounge",
            "Emergency Exit",
            "Main",
            "Spiral Stairs",
            "Yellow Stairs",
            "Service Stairs",
            "West Corridor",
            "East Corridor",
            "Emergency Exit"
        ],
        "B": [
            { name: "Servers", site: { bomb: { id: 3, name: "B Servers & 1F Tellers", letter: "B" }, hostage: { id: 4 }, secure: { id: 3 } } },
            { name: "Cafeteria", site: { bomb: { id: 4, name: "B Cafeteria & B Garage", letter: "A" } } },
            { name: "Garage", site: { bomb: { id: 4, name: "B Cafeteria & B Garage", letter: "B" }, secure: { id: 4 } } },
            "Electrical Room",
            "Storage",
            "Coffee",
            "Servers Hallway",
            "Security Room",
            "Construction",
            "Locker Hallway",
        ],
        "EXT": [
            "Front Alley",
            "East Front Yard",
            "West Front Yard",
            "Fountain",
            "Parking",
            "Garage Way",
            "Memorial",
            "Side Entrance",
            "Courtyard",
            "Back Courtyard",
            "Police Line",
            "Riot Barricade"
        ]
    };
    get sites() {
        return (Object.values(this.rooms).flat().filter((room => typeof room !== "string" && room.site?.bomb)) as Room[]).map(room => room.name);
    }
});