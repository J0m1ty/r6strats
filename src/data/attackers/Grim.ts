import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five52_Commando } from "../weapons/assault rifle/552 COMMANDO";
import { P229 } from "../weapons/handgun/P229";
import { Bailiff_410 } from "../weapons/revolver/Bailiff 410";
import { SG_CQB } from "../weapons/shotgun/SG-CQB";

export const Grim: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "support", "map control" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ Five52_Commando, SG_CQB ];
    secondary = [ P229, Bailiff_410 ];
    gadgets: AttackerGadget[] = [ "impact emp grenade", "claymore", "hard breaching charge" ];
})();