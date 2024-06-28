import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const RG15: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 38;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 16;
    capacity = 106;
    reloadSpeed = 2.4;
    
    controlDifficulty = 1;
    adsTime = 0.23;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();