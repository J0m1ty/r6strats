import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { D_50 } from "../weapons/handgun/D-50";
import { MK17_CQB } from "../weapons/assault rifle/Mk17 CQB";
import { SR_25 } from "../weapons/marksman rifle/SR-25";

export const Blackbeard: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ MK17_CQB, SR_25 ];
    secondary = [ D_50 ];
    gadgets: AttackerGadget[] = [ "claymore", "stun grenade" ];
})();