import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { ITA12S } from "../weapons/shotgun/ITA12S";

export const Jackal: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "intel", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ ];
    secondary = [ ITA12S ];
    gadgets: AttackerGadget[] = [ "claymore", "smoke grenade" ];
})();