import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SMG_12: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "SMG-12";
    catagory: WeaponCatagory = "machine pistol";
    acog = false;

    damage = 28;
    fireRate: GunFireRate = 1270;
    destruction: GunDestruction = "low";

    magazine = 33;
    capacity = 129;
    reloadSpeed = 3;
    
    controlDifficulty = 4;
    adsTime = 0.32;
    hipAccuracy = 71;

    mobility: Mobility = "0%";
})();