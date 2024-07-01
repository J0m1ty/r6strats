import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Q_929 } from "../weapons/handgun/Q-929";
import { T_95_LSW } from "../weapons/light machine gun/T-95 LSW";
import { SIX12 } from "../weapons/shotgun/SIX12";

export const Ying: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "front-line", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ T_95_LSW, SIX12 ];
    secondary = [ Q_929 ];
    gadgets: AttackerGadget[] = [ "hard breaching charge", "smoke grenade" ];
})();