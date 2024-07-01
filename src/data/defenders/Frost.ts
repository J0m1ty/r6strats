import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { Mk1_9mm } from "../weapons/handgun/Mk1 9mm";
import { ITA12S } from "../weapons/shotgun/ITA12S";
import { Super_90 } from "../weapons/shotgun/Super 90";
import { NineMM_C1 } from "../weapons/submachine gun/9mm C1";

export const Frost: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "anti-entry", "trapper" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ Super_90, NineMM_C1 ];
    secondary = [ Mk1_9mm, ITA12S ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "deployable shield" ];
})();