import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const R4_C: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "R4-C";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 39;
    fireRate = 860;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.4;
    
    controlDifficulty = 4;
    adsTime = 0.44;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();