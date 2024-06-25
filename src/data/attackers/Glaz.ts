import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { BEARING_9 } from "../weapons/BEARING 9";
import { GONNE_6 } from "../weapons/GONNE-6";
import { OTs_O3 } from "../weapons/OTs-03";
import { PMM } from "../weapons/PMM";

export const Glaz: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "support", "intel" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ OTs_O3 ];
    secondary = [ PMM, GONNE_6, BEARING_9 ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "frag grenade", "claymore" ];
})();