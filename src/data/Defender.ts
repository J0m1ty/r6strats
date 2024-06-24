import { Operator } from "./Operator";

export type DefenderGadget = "barbed wire" | "bulletproof camera" | "deployable shield" | "nitro cell" | "impact grenade" | "proximity alarm" | "observation blocker";

export abstract class Defender extends Operator {
    abstract gadgets: DefenderGadget[];
}