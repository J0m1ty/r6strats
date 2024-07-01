import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { G52_Tactical_Shield } from "../weapons/shield/G52-TACTICAL SHIELD";
import { P12 } from "../weapons/handgun/P12";

export const Blitz: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "front-line", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ G52_Tactical_Shield ];
    secondary = [ P12 ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "soft breaching charge" ];
})();