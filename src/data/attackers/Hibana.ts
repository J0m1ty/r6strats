import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Bearing_9 } from "../weapons/machine pistol/BEARING 9";
import { P229 } from "../weapons/handgun/P229";
import { Supernova } from "../weapons/shotgun/SUPERNOVA";
import { Type_89 } from "../weapons/assault rifle/TYPE-89";

export const Hibana: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "front-line", "breach" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ Type_89, Supernova ];
    secondary = [ P229, Bearing_9 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "soft breaching charge" ];
})();