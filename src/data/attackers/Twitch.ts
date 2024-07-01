import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Four17 } from "../weapons/marksman rifle/417";
import { F2 } from "../weapons/assault rifle/F2";
import { LFP586 } from "../weapons/handgun/LFP586";
import { P9 } from "../weapons/handgun/P9";
import { SG_CQB } from "../weapons/shotgun/SG-CQB";

export const Twitch: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "anti-gadget", "intel" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ F2, Four17, SG_CQB ];
    secondary = [ P9, LFP586 ];
    gadgets: AttackerGadget[] = [ "claymore", "smoke grenade" ];
})();