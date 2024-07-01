import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { P226_Mk_25 } from "../weapons/handgun/P226 MK 25";
import { C75_Auto } from "../weapons/machine pistol/C75 Auto";
import { SPSMG9 } from "../weapons/machine pistol/SPSMG9";
import { CSRX_300 } from "../weapons/sniper rifle/CSRX 300";

export const Kali: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "anti-gadget", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ CSRX_300 ];
    secondary = [ SPSMG9, C75_Auto, P226_Mk_25 ];
    gadgets: AttackerGadget[] = [ "claymore", "soft breaching charge" ];
})();