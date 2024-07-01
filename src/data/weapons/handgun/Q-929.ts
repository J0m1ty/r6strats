import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Q_929: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "Q-929";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 60;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 11;
    capacity = 101;
    reloadSpeed = 2.1;
    
    controlDifficulty = 2;
    adsTime = 0.22;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();