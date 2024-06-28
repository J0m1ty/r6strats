import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const P9: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 45;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 17;
    capacity = 113;
    reloadSpeed = 2.1;
    
    controlDifficulty = 1;
    adsTime = 0.22;
    hipAccuracy = 70;

    mobility: Mobility = "10%";
})();