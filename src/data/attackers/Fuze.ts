import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { Balistic_Shield } from "../weapons/shield/BALISTIC SHIELD";
import { PMM } from "../weapons/handgun/PMM";
import { SixP41 } from "../weapons/light machine gun/6P41";
import { AK_12 } from "../weapons/assault rifle/AK-12";
import { GSH_18 } from "../weapons/handgun/GSH-18";

export const Fuze: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "anti-gadget" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ AK_12, SixP41, Balistic_Shield ];
    secondary = [ PMM, GSH_18 ];
    gadgets: AttackerGadget[] = [ "soft breaching charge", "smoke grenade", "hard breaching charge" ];
})();