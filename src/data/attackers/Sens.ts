import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { SDP_9mm } from "../weapons/handgun/SDP 9mm";
import { Four17 } from "../weapons/marksman rifle/417";

export const Sens: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "support", "map control" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ Four17 ];
    secondary = [ SDP_9mm ];
    gadgets: AttackerGadget[] = [ "hard breaching charge", "claymore", "frag grenade" ];
})();