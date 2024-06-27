import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { Five56XI } from "../weapons/assault rifle/556XI";
import { M1014 } from "../weapons/shotgun/M1014";
import { M45_MEUSOC } from "../weapons/handgun/M45 MEUSOC";

export const Thermite: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "breach", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ M1014, Five56XI ];
    secondary = [ M45_MEUSOC, Five_Seven_USG ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "stun grenade" ];
})();