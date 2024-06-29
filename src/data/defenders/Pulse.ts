import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { M1014 } from "../weapons/shotgun/M1014";
import { UMP45 } from "../weapons/submachine gun/UMP45";
import { M45_MEUSOC } from "../weapons/handgun/M45 MEUSOC";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";

export const Pulse: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "intel", "support" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ M1014, UMP45 ];
    secondary = [ M45_MEUSOC, Five_Seven_USG ];
    gadgets: DefenderGadget[] = [ "nitro cell", "deployable shield", "observation blocker" ];
})();