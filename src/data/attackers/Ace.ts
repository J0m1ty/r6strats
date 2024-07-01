import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { AK_12 } from "../weapons/assault rifle/AK-12";
import { P9 } from "../weapons/handgun/P9";
import { M1014 } from "../weapons/shotgun/M1014";

export const Ace: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "breach", "anti-gadget" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ AK_12, M1014 ];
    secondary = [ P9 ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "claymore" ];
})();