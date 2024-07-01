import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { C7E } from "../weapons/assault rifle/C7E";
import { ITA12L } from "../weapons/shotgun/ITA12L";
import { ITA12S } from "../weapons/shotgun/ITA12S";
import { PDW9 } from "../weapons/submachine gun/PDW9";

export const Jackal: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ C7E, PDW9, ITA12L ];
    secondary = [ ITA12S ];
    gadgets: AttackerGadget[] = [ "claymore", "smoke grenade" ];
})();