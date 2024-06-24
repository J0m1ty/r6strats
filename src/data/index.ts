import { Striker } from "./attackers/Striker";
import { Consulate } from "./maps/Consulate";
import { Five_Seven_USG } from "./weapons/5.7 USG";
import { Balistic_Shield } from "./weapons/Balistic Shield";
import { ITA12S } from "./weapons/ITA12S";
import { L85A2 } from "./weapons/L85A2";
import { M249 } from "./weapons/M249";
import { M4 } from "./weapons/M4";
import { M590A1 } from "./weapons/M590A1";
import { P226_MK_25 } from "./weapons/P226 MK 25";

export const operators = {
    Striker
};

export type OperatorName = keyof typeof operators;

export const weapons = {
    Five_Seven_USG,
    Balistic_Shield,
    ITA12S,
    L85A2,
    M4,
    M249,
    M590A1,
    P226_MK_25
};

export type WeaponName = keyof typeof weapons;

export const maps = {
    Consulate
}

export type MapName = keyof typeof maps;