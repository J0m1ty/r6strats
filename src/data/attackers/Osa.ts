import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five56XI } from "../weapons/assault rifle/556XI";
import { PMM } from "../weapons/handgun/PMM";
import { PDW9 } from "../weapons/submachine gun/PDW9";

export const Osa: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "intel", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ Five56XI, PDW9 ];
    secondary = [ PMM ];
    gadgets: AttackerGadget[] = [ "claymore", "impact emp grenade", "frag grenade" ];
})();