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

    abstract damage: number; // body damage at 0 meters
    abstract fireRate: GunFireRate;
    abstract destruction: GunDestruction;

    abstract magazine: number;
    abstract capacity: number;
    abstract reloadSpeed: number;
    
    abstract controlDifficulty: number; // 1-3
    abstract adsTime: number; // this value includes acog + laser if applicable
    abstract hipAccuracy: number; // 0-100 (%)
}