import { Weapon } from "./Weapon";

export type GunType = "primary" | "secondary";
export type GunFireRate = number | "single shot";
export type GunDestruction = "low" | "medium" | "high" | "full";

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
    
    static get data(): Gun {
        throw new Error("Method not implemented.");
    }
}