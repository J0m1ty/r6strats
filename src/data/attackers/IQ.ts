import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five52_Commando } from "../weapons/552 Commando";
import { AUG_A2 } from "../weapons/AUG A2";
import { G8A1 } from "../weapons/G8A1";
import { P12 } from "../weapons/P12";

export const IQ: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "intel", "support" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ AUG_A2, Five52_Commando, G8A1 ];
    secondary = [ P12 ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "claymore", "frag grenade" ];
})();