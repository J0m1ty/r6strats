import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Bearing_9 } from "../weapons/machine pistol/Bearing 9";
import { P229 } from "../weapons/handgun/P229";
import { SuperNova } from "../weapons/shotgun/SuperNova";
import { Type_89 } from "../weapons/assault rifle/Type-89";

export const Hibana: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "front-line", "breach" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ Type_89, SuperNova ];
    secondary = [ P229, Bearing_9 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "soft breaching charge" ];
})();