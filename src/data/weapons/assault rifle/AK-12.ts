import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const AK_12: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 670;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.3;
    
    controlDifficulty = 3;
    adsTime = 0.47;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();