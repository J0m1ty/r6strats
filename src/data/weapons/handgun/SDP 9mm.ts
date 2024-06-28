import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SDP_9mm: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 47;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 17;
    capacity = 113;
    reloadSpeed = 2.2;
    
    controlDifficulty = 2;
    adsTime = 0.19;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();