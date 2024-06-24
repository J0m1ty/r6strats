import { Operator } from "./Operator";

export type AttackerGadget = "soft breaching charge" | "frag grenade" | "hard breaching charge" | "stun grenade" | "claymore" | "smoke grenade" | "impact emp grenade";

export abstract class Attacker extends Operator {
    abstract gadgets: AttackerGadget[];
}