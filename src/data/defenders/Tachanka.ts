import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { DP27 } from "../weapons/submachine gun/DP27";
import { GSh_18 } from "../weapons/handgun/GSh-18";
import { PMM } from "../weapons/handgun/PMM";
import { Bearing_9 } from "../weapons/machine pistol/Bearing 9";
import { NineMM_C1 } from "../weapons/submachine gun/9mm C1";

export const Tachanka: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "anti-entry", "crowd control" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ DP27, NineMM_C1 ];
    secondary = [ GSh_18, PMM, Bearing_9 ];
    gadgets: DefenderGadget[] = [ "barbed wire", "deployable shield", "proximity alarm" ];
})();