import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { C75_Auto } from "../weapons/machine pistol/C75 Auto";
import { SMG_12 } from "../weapons/machine pistol/SMG-12";
import { Mk_14_EBR } from "../weapons/marksman rifle/Mk 14 EBR";
import { BOSG_12_2 } from "../weapons/shotgun/BOSG.12.2";

export const Dokkaebi: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "intel", "map control" ]; // Changed "breach" to "intel" and "anti-gadget" to "map control
    health: Value = 1;
    speed: Value = 3;
    primary = [ Mk_14_EBR, BOSG_12_2 ];
    secondary = [ SMG_12, C75_Auto, GONNE_6 ];
    gadgets: AttackerGadget[] = [ "smoke grenade", "stun grenade", "impact emp grenade" ];
})();