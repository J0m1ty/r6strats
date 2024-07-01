import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { SC3000K } from "../weapons/assault rifle/SC3000K";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { MP7 } from "../weapons/submachine gun/MP7";

export const Zerp: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "anti-gadget", "intel" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ SC3000K, MP7 ];
    secondary = [ Five_Seven_USG, GONNE_6 ];
    gadgets: AttackerGadget[] = [ "hard breaching charge", "smoke grenade" ];
})();