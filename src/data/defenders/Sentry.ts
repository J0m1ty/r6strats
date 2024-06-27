import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { G36C } from "../weapons/assault rifle/G36C";
import { M45_MEUSOC } from "../weapons/handgun/M45 MEUSOC";
import { R4_C } from "../weapons/assault rifle/R4-C";
import { Defender, DefenderGadget } from "../Defender";
import { M4 } from "../weapons/assault rifle/M4";
import { M249 } from "../weapons/light machine gun/M249";
import { C75_AUTO } from "../weapons/machine pistol/C75 AUTO";
import { SUPER_SHORTY } from "../weapons/shotgun/SUPER SHORTY";

export const Ash: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "support", ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ M4, M249 ];
    secondary = [ C75_AUTO, SUPER_SHORTY ];
    gadgets: DefenderGadget[] = [ "barbed wire", "bulletproof camera", "deployable shield", "observation blocker", "impact grenade", "nitro cell", "proximity alarm" ];
})();