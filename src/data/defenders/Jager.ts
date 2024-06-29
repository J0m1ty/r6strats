import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { M870 } from "../weapons/shotgun/M870";
import { Four16_C_Carbine } from "../weapons/assault rifle/416-C Carbine";
import { P12 } from "../weapons/handgun/P12";

export const Jager: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "anti-gadget", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ M870, Four16_C_Carbine ];
    secondary = [ P12 ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "observation blocker" ];
})();