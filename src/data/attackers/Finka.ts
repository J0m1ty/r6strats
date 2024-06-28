import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { SPEAR_308 } from "../weapons/assault rifle/SPEAR .308";
import { GSH_18 } from "../weapons/handgun/GSH-18";
import { PMM } from "../weapons/handgun/PMM";
import { SixP41 } from "../weapons/light machine gun/6P41";
import { SASG_12 } from "../weapons/shotgun/SASG_12";

export const Lion: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ SPEAR_308, SixP41, SASG_12 ];
    secondary = [ PMM, GSH_18 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "claymore", "frag grenade" ];
})();