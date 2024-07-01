import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { AR33 } from "../weapons/assault rifle/AR33";
import { GSh_18 } from "../weapons/handgun/GSh-18";
import { SR_25 } from "../weapons/marksman rifle/SR-25";

export const Flores: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "anti-gadget", "intel" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ AR33, SR_25 ];
    secondary = [ GSh_18 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "claymore" ];
})();