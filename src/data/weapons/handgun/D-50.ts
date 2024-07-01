import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const D_50: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "D-50";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 71;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "medium";

    magazine = 8;
    capacity = 64;
    reloadSpeed = 2.5;
    
    controlDifficulty = 3;
    adsTime = 0.22;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();