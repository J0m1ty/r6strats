import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { NINEX19VSN } from "../weapons/submachine gun/9X19VSN";
import { SASG_12 } from "../weapons/shotgun/SASG_12";
import { PMM } from "../weapons/handgun/PMM";
import { GSH_18 } from "../weapons/handgun/GSH-18";

export const Kapkan: Defender = new (class implements Defender {
    specialties: Specialty[] = [ "anti-entry", "trapper" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ NINEX19VSN, SASG_12 ];
    secondary = [ PMM, GSH_18 ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "nitro cell" ];
})();