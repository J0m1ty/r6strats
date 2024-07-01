import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const C75_Auto: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "C75 Auto";
    catagory: WeaponCatagory = "machine pistol";
    acog = false;

    damage = 35;
    fireRate: GunFireRate = 1000;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 131;
    reloadSpeed = 2.9;
    
    controlDifficulty = 3;
    adsTime = 0.31;
    hipAccuracy = 71;

    mobility: Mobility = "5%";
})();