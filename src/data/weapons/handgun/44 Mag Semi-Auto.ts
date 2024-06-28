import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Fourty4_Mag_Semi_Auto: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 54;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "medium";

    magazine = 8;
    capacity = 71;
    reloadSpeed = 2.1;
    
    controlDifficulty = 2;
    adsTime = 0.19;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();