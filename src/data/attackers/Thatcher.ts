import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { AR33 } from "../weapons/assault rifle/AR33";
import { L85A2 } from "../weapons/assault rifle/L85A2";
import { M590A1 } from "../weapons/shotgun/M590A1";
import { P226_Mk_25 } from "../weapons/handgun/P226 MK 25";

export const Thatcher: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "anti-gadget", "support" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ AR33, M590A1, L85A2 ];
    secondary = [ P226_Mk_25 ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "claymore" ];
})();