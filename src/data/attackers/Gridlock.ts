import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { F90 } from "../weapons/assault rifle/F90";
import { SDP_9mm } from "../weapons/handgun/SDP 9mm";
import { M249_SAW } from "../weapons/light machine gun/M249 SAW";
import { SUPER_SHORTY } from "../weapons/shotgun/SUPER SHORTY";

export const Gridlock: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "support", "map control" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ F90, M249_SAW ];
    secondary = [ SUPER_SHORTY, SDP_9mm ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "impact emp grenade", "frag grenade" ];
})();