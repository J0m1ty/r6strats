import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { LFP586 } from "../weapons/handgun/LFP586";
import { P9 } from "../weapons/handgun/P9";
import { Le_Roc_Shield } from "../weapons/shield/Le Roc Shield";

export const Montagne: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "support", "intel" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ Le_Roc_Shield ];
    secondary = [ P9, LFP586 ];
    gadgets: AttackerGadget[] = [ "hard breaching charge", "smoke grenade", "impact emp grenade" ];
})();