import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Bearing_9 } from "../weapons/machine pistol/Bearing 9";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { OTs_O3 } from "../weapons/sniper rifle/OTs-03";
import { PMM } from "../weapons/handgun/PMM";

export const Glaz: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "support", "intel" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ OTs_O3 ];
    secondary = [ PMM, GONNE_6, Bearing_9 ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "frag grenade", "claymore" ];
})();