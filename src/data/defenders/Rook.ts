import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { P90 } from "../weapons/submachine gun/P90";
import { MP5 } from "../weapons/submachine gun/MP5";
import { SG_CQB } from "../weapons/shotgun/SG-CQB";
import { LFP586 } from "../weapons/handgun/LFP586";
import { P9 } from "../weapons/handgun/P9";

export const Rook: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "support" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ P90, MP5, SG_CQB ];
    secondary = [ LFP586, P9 ];
    gadgets: DefenderGadget[] = [ "proximity alarm", "impact grenade", "observation blocker" ];
})();