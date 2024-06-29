import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { MP5K } from "../weapons/submachine gun/MP5K";
import { M590A1 } from "../weapons/shotgun/M590A1";
import { P226_MK_25 } from "../weapons/handgun/P226 MK 25";
import { SMG_11 } from "../weapons/machine pistol/SMG-11";

export const Mute: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "anti-gadget", "crowd control" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ MP5K, M590A1 ];
    secondary = [ P226_MK_25, SMG_11 ];
    gadgets: DefenderGadget[] = [ "nitro cell", "bulletproof camera" ];
})();