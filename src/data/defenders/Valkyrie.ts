import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { MPX } from "../weapons/submachine gun/MPX";
import { SPAS_12 } from "../weapons/shotgun/SPAS-12";
import { D_50 } from "../weapons/handgun/D-50";

export const Valkyrie: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "intel", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ MPX, SPAS_12 ];
    secondary = [ D_50 ];
    gadgets: DefenderGadget[] = [ "impact grenade", "nitro cell" ];
})();