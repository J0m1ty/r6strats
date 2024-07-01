import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const USP40: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "USP40";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 48;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 13;
    capacity = 97;
    reloadSpeed = 2.1;
    
    controlDifficulty = 2;
    adsTime = 0.22;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();