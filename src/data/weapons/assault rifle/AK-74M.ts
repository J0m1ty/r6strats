import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const AK_74M: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "AK-74M";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 41;
    fireRate = 201;
    destruction: GunDestruction = "medium";

    magazine = 41;
    capacity = 201;
    reloadSpeed = 3.4;
    
    controlDifficulty = 2;
    adsTime = 0.47;
    hipAccuracy = 70;

    mobility: Mobility = "5%";
})();