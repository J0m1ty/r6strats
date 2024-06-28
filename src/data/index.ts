import { Striker } from "./attackers/Striker";
import { Consulate } from "./maps/Consulate";
import { Five_Seven_USG } from "./weapons/handgun/5.7 USG";
import { Balistic_Shield } from "./weapons/shield/BALISTIC SHIELD";
import { ITA12S } from "./weapons/shotgun/ITA12S";
import { L85A2 } from "./weapons/assault rifle/L85A2";
import { M249 } from "./weapons/light machine gun/M249";
import { M4 } from "./weapons/assault rifle/M4";
import { M590A1 } from "./weapons/shotgun/M590A1";
import { P226_MK_25 } from "./weapons/handgun/P226 MK 25";

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