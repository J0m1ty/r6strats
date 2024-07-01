import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const V308: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "V308";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 44;
    fireRate = 700;
    destruction: GunDestruction = "low";

    magazine = 51;
    capacity = 201;
    reloadSpeed = 3.3;
    
    controlDifficulty = 1;
    adsTime = 0.52;
    hipAccuracy = 70;

    mobility: Mobility = "0%";
})();