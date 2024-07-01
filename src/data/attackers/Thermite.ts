import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { Five56xi } from "../weapons/assault rifle/556xi";
import { M1014 } from "../weapons/shotgun/M1014";
import { M45_MEUSOC } from "../weapons/handgun/M45 MEUSOC";

export const Thermite: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "breach", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ M1014, Five56xi ];
    secondary = [ M45_MEUSOC, Five_Seven_USG ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "stun grenade" ];
})();