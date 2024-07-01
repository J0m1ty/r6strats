import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const F90: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "F90";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 38;
    fireRate = 780;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.1;
    
    controlDifficulty = 2;
    adsTime = 0.52;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();