import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { UMP45 } from "../weapons/submachine gun/UMP45";
import { M1014 } from "../weapons/shotgun/M1014";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { Super_Shorty } from "../weapons/shotgun/Super Shorty";
import { M45_MEUSOC } from "../weapons/handgun/M45 MEUSOC";

export const Castle: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "anti-entry", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ UMP45, M1014 ];
    secondary = [ Five_Seven_USG, Super_Shorty, M45_MEUSOC ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "proximity alarm" ];
})();