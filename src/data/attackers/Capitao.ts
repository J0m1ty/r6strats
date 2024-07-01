import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { M249 } from "../weapons/light machine gun/M249";
import { PARA_308 } from "../weapons/assault rifle/PARA-308";
import { PRB92 } from "../weapons/handgun/PRB92";

export const Capitao: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "front-line", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ PARA_308, M249 ];
    secondary = [ PRB92, GONNE_6 ];
    gadgets: AttackerGadget[] = [ "claymore", "hard breaching charge", "impact emp grenade" ];
})();