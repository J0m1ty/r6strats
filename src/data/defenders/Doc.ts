import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { SG_CQB } from "../weapons/shotgun/SG-CQB";
import { MP5 } from "../weapons/submachine gun/MP5";
import { P9 } from "../weapons/handgun/P9";
import { LFP586 } from "../weapons/handgun/LFP586";
import { BAILIFF_410 } from "../weapons/revolver/BAILIFF 410";

export const Pulse: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "support" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ SG_CQB, MP5 ];
    secondary = [ P9, LFP586, BAILIFF_410 ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "barbed wire" ];
})();