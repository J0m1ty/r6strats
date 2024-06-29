import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { SUPER_90 } from "../weapons/shotgun/SUPER 90";
import { NineMM_C1 } from "../weapons/submachine gun/9MM C1";
import { MK1_9mm } from "../weapons/handgun/MK1 9mm";
import { ITA12S } from "../weapons/shotgun/ITA12S";

export const Frost: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "anti-entry", "trapper" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ SUPER_90, NineMM_C1 ];
    secondary = [ MK1_9mm, ITA12S ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "deployable shield" ];
})();