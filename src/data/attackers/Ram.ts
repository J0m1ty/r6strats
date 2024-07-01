import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { R4_C } from "../weapons/assault rifle/R4-C";
import { Mk1_9mm } from "../weapons/handgun/Mk1 9mm";
import { LMG_E } from "../weapons/light machine gun/LMG-E";
import { ITA12S } from "../weapons/shotgun/ITA12S";

export const Ram: Attacker = new (class extends Attacker {
    specialties: Specialty[] = [ "breach", "anti-gadget" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ R4_C, LMG_E ];
    secondary = [ Mk1_9mm, ITA12S ];
    gadgets: AttackerGadget[] = [ "stun grenade", "smoke grenade" ];
})();