import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five56xi } from "../weapons/assault rifle/556xi";
import { PMM } from "../weapons/handgun/PMM";
import { PDW9 } from "../weapons/submachine gun/PDW9";

export const Osa: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "intel", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ Five56xi, PDW9 ];
    secondary = [ PMM ];
    gadgets: AttackerGadget[] = [ "claymore", "impact emp grenade", "frag grenade" ];
})();