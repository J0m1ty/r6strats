import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const MPX: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "MPX";
    catagory: WeaponCatagory = "submachine gun";
    acog = false;

    damage = 26;
    fireRate = 830;
    destruction: GunDestruction = "low";

    magazine = 30;
    capacity = 181;
    reloadSpeed = 3.1;
    
    controlDifficulty = 3;
    adsTime = 0.39;
    hipAccuracy = 76;

    mobility: Mobility = "0%";
})();