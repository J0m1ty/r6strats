import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { C8_SFW } from "../weapons/assault rifle/C8-SFW";
import { CAMRS } from "../weapons/marksman rifle/CAMRS";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { MK1_9mm } from "../weapons/handgun/MK1 9mm";

export const Buck: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "breach", "support" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ C8_SFW, CAMRS ];
    secondary = [ MK1_9mm, GONNE_6 ];
    gadgets: AttackerGadget[] = [ "stun grenade", "hard breaching charge" ];
})();