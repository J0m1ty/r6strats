import { Map, MapPool, Rooms } from "../Map";
import { Room } from "../Room";

export const Consulate = new (class implements Map {
    pools: MapPool[] = ["STANDARD", "QUICK MATCH", "RANKED"];
    spawns = ["Riot Barricade", "Police Line", "Gas Station", "Side Street"];
    rooms: Rooms = {
        "2F": [
            { name: "Meeting Room", site: { id: 1, name: "2F Consul Office & Meeting Room", bomb: true, letter: "A" } },
            { name: "Consul Office", site: { id: 1, name: "2F Consul Office & Meeting Room", bomb: true, letter: "B" } },
            "Side",
            "Catering",
            "Bathroom",
            "Reception",
            "Copy Room",
            "Manager's Office",
            "Administration Office",
            "Secretary"
        ],
        "1F": [
            { name: "Piano", site: { id: 2, name: "1F Piano & Exobition", bomb: true, letter: "A" } },
            { name: "Exbosition", site: { id: 2, name: "1F Piano & Exobition", bomb: true, letter: "B" } },
            { name: "Tellers", site: { id: 3, name: "1F Tellers & B Servers", bomb: true, letter: "A" } },
            "Closet",
            "Lobby",
            "Main Entrance",
            "Lounge",
            "Visa Office",
            "Emergency Exit",
            "Main"
        ],
        "B": [
            { name: "Servers", site: { id: 3, name: "1F Tellers & B Servers", bomb: true, letter: "B" } },
            { name: "Cafeteria", site: { id: 4, name: "B Cafeteria & Garage", bomb: true, letter: "A" } },
            { name: "Garage", site: { id: 4, name: "B Cafeteria & Garage", bomb: true, letter: "B" } },
            "Electrical",
            "Storage",
            "Coffee",
            "Security",
            "Construction",
            "Lockers",
        ],
        "EXT": [
            "Front Alley",
            "East Front Yard",
            "West Front Yard",
            "Fountain",
            "Parking",
            "Garage Wat",
            "Memorial",
            "Side Entrance",
            "Courtyard",
            "Back Courtyard",
            "Police",
            "Barricade"
        ]
    };
    get sites() {
        return Object.values(this.rooms).flat().filter((room => typeof room !== "string" && room.site)) as Room[];
    }
});