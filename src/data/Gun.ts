import { Weapon } from "./Weapon";

export type GunType = "primary" | "secondary";
export type GunFireRate = number | "single shot";
export type GunDestruction = "low" | "medium" | "high" | "full";

//TODO: Get exact damage dropoff distance in meters for each gun on body / arms & legs
//TODO: Set ads time on all guns to iron sight + no attachments
//TODO: Add "non-magnifying", "laser", and "ACOG" time modifiers to each gun
export abstract class Gun extends Weapon {
    abstract type: GunType;
    abstract acog: boolean;

    abstract damage: number;
    abstract fireRate: GunFireRate;
    abstract destruction: GunDestruction;

    abstract magazine: number;
    abstract capacity: number;
    abstract reloadSpeed: number;
    
    abstract adsTime: number; // this value includes acog + laser if applicable
    //abstract nonManifyingTime: number;
    //abstract laserTime: number;
    //abstract acogTime: number;
    
    static get data(): Gun {
        throw new Error("Method not implemented.");
    }
}