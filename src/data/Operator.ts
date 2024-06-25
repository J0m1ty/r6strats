import { Weapon } from "./Weapon";

export type Value = 1 | 2 | 3;
export type Specialty = "intel" | "map control" | "anti-entry" | "anti-gadget" | "breach" | "trapper" | "crowd control" | "support" | "front line";

export abstract class Operator {
    abstract specialties: Specialty[];
    abstract health: Value;
    abstract speed: Value;
    abstract primary: Weapon[];
    abstract secondary: Weapon[];
}