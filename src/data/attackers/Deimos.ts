import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { AK_74M } from "../weapons/assault rifle/AK-74M";
import { Fourty4_Vendetta } from "../weapons/handgun/44 Vendetta";
import { M590A1 } from "../weapons/shotgun/M590A1";

export const Deimos: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ AK_74M, M590A1 ];
    secondary = [ Fourty4_Vendetta ];
    gadgets: AttackerGadget[] = [ "frag grenade", "hard breaching charge" ];
})();