import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Balistic_Shield } from "../weapons/shield/Balistic Shield";
import { PMM } from "../weapons/handgun/PMM";

export const Fuze: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "anti-gadget" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ Balistic_Shield ];
    secondary = [ PMM ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "smoke grenade", "hard breaching charge" ];
})();