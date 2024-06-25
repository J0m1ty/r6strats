import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/5.7 USG";
import { Five56XI } from "../weapons/556XI";
import { M1014 } from "../weapons/M1014";
import { M45_MEUSOC } from "../weapons/M45 MEUSOC";

export const Striker: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ M1014, Five56XI ];
    secondary = [ M45_MEUSOC, Five_Seven_USG ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "stun grenade" ];
})();