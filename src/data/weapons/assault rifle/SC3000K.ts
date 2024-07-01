import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SC3000K: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "SC3000K";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 45;
    fireRate = 800;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 176;
    reloadSpeed = 3.4;
    
    controlDifficulty = 2;
    adsTime = 0.47;
    hipAccuracy = 70;

    mobility: Mobility = "0%";
})();