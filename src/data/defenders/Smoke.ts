import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { FMG_9 } from "../weapons/submachine gun/FMG-9";
import { M590A1 } from "../weapons/shotgun/M590A1";
import { P226_Mk_25 } from "../weapons/handgun/P226 MK 25";
import { SMG_11 } from '../weapons/machine pistol/SMG-11';

export const Smoke: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "anti-entry", "trapper", ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ FMG_9, M590A1 ];
    secondary = [ P226_Mk_25, SMG_11 ];
    gadgets: DefenderGadget[] = [ "barbed wire", "proximity alarm" ];
})();