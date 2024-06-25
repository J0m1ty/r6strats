import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/5.7 USG";
import { G36C } from "../weapons/G36C";
import { M45_MEUSOC } from "../weapons/M45 MEUSOC";
import { R4_C } from "../weapons/R4-C";

export const Striker: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "support" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ G36C, R4_C ];
    secondary = [ M45_MEUSOC, Five_Seven_USG ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "claymore" ];
})();