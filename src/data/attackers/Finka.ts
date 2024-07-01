import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Spear_308 } from "../weapons/assault rifle/Spear .308";
import { GSh_18 } from "../weapons/handgun/GSh-18";
import { PMM } from "../weapons/handgun/PMM";
import { SixP41 } from "../weapons/light machine gun/6P41";
import { SASG_12 } from "../weapons/shotgun/SASG_12";

export const Finka: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ Spear_308, SixP41, SASG_12 ];
    secondary = [ PMM, GSh_18 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "claymore", "frag grenade" ];
})();