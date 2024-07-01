import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { V308 } from "../weapons/assault rifle/V308";
import { LFP586 } from "../weapons/handgun/LFP586";
import { P9 } from "../weapons/handgun/P9";
import { Four17 } from "../weapons/marksman rifle/417";
import { SG_CQB } from "../weapons/shotgun/SG-CQB";

export const Lion: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ V308, Four17, SG_CQB ];
    secondary = [ LFP586, P9 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "claymore", "frag grenade" ];
})();