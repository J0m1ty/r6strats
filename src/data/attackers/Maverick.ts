import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { M4 } from "../weapons/assault rifle/M4";
import { One911_TACOPS } from "../weapons/handgun/1911 TACOPS";
import { AR_15_50 } from "../weapons/marksman rifle/AR-15.50";

export const Maverick: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ AR_15_50, M4 ];
    secondary = [ One911_TACOPS ];
    gadgets: AttackerGadget[] = [ "stun grenade", "claymore", "smoke grenade" ];
})();