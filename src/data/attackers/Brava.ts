import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { PARA_308 } from "../weapons/assault rifle/PARA-308";
import { CAMRS } from "../weapons/marksman rifle/CAMRS";
import { Super_Shorty } from "../weapons/shotgun/Super Shorty";
import { USP40 } from "../weapons/handgun/USP40";

export const Brava: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "anti-gadget", "intel" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ PARA_308, CAMRS ];
    secondary = [ Super_Shorty, USP40 ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "claymore" ];
})();