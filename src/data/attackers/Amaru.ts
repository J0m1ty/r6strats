import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { G8A1 } from "../weapons/light machine gun/G8A1";
import { SMG_11 } from "../weapons/machine pistol/SMG-11";
import { ITA12S } from "../weapons/shotgun/ITA12S";
import { Supernova } from "../weapons/shotgun/SUPERNOVA";

export const Amaru: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "front-line", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ G8A1, Supernova ];
    secondary = [ SMG_11, ITA12S, GONNE_6 ];
    gadgets: AttackerGadget[] = [ "hard breaching charge", "stun grenade" ];
})();