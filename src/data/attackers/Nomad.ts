import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { AK_74M } from "../weapons/assault rifle/AK-74M";
import { ARX200 } from "../weapons/assault rifle/ARX200";
import { Fourty4_Mag_Semi_Auto } from "../weapons/handgun/44 Mag Semi-Auto";
import { PRB92 } from "../weapons/handgun/PRB92";

export const Nomad: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "map control", "front-line" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ AK_74M, ARX200 ];
    secondary = [ Fourty4_Mag_Semi_Auto, PRB92 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "soft breaching charge" ];
})();