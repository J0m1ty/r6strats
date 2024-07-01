import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { M762 } from "../weapons/assault rifle/M762";
import { RG15 } from "../weapons/handgun/RG15";
import { LMG_E } from "../weapons/light machine gun/LMG-E";

export const Zofia: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "breach", "anti-gadget" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ LMG_E, M762 ];
    secondary = [ RG15 ];
    gadgets: AttackerGadget[] = [ "claymore", "soft breaching charge" ];
})();