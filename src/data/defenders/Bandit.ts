import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { MP7 } from "../weapons/submachine gun/MP7";
import { M870 } from "../weapons/shotgun/M870";
import { P12 } from "../weapons/handgun/P12";

export const Bandit: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "anti-entry", "anti-gadget" ];
    health: Value = 1;
    speed: Value = 3;
    primary = [ MP7, M870 ];
    secondary = [ P12 ];
    gadgets: DefenderGadget[] = [ "barbed wire", "nitro cell" ];
})();