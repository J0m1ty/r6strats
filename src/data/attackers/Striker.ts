import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { ITA12S } from "../weapons/shotgun/ITA12S";
import { M249 } from "../weapons/light machine gun/M249";
import { M4 } from "../weapons/assault rifle/M4";

export const Striker: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ M4, M249 ];
    secondary = [ Five_Seven_USG, ITA12S ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "frag grenade", "hard breaching charge", "stun grenade", "claymore", "smoke grenade", "impact emp grenade" ];
})();