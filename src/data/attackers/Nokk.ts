import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Five_Seven_USG } from "../weapons/handgun/5.7 USG";
import { D_50 } from "../weapons/handgun/D-50";
import { SIX12_SD } from "../weapons/shotgun/SIX12_SD";
import { FMG_9 } from "../weapons/submachine gun/FMG-9";

export const Nokk: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "front-line", "map control" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ FMG_9, SIX12_SD ];
    secondary = [ Five_Seven_USG, D_50 ];
    gadgets: AttackerGadget[] = [ "frag grenade", "hard breaching charge", "impact emp grenade" ];
})();