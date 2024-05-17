export type Floor = "basement" | "first" | "second" | "third";

export type Room = {
    name: string;
    site: Site;
    bomb: false | "A" | "B";
    floor: Floor;
};

export type Site = string;

export type Spawn = {
    name: string;
    direction: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
};