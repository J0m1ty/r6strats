import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M762: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "M762";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 45;
    fireRate = 730;
    destruction: GunDestruction = "medium";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.3;
    
    controlDifficulty = 3;
    adsTime = 0.52;
    hipAccuracy = 70;
    
    mobility: Mobility = "0%";
})();