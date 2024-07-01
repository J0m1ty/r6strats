import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const POF_9: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 35;
    fireRate = 750;
    destruction: GunDestruction = "low";

    magazine = 51;
    capacity = 201;
    reloadSpeed = 3.3;
    
    controlDifficulty = 1;
    adsTime = 0.52;
    hipAccuracy = 65;

    mobility: Mobility = "0%";
})();