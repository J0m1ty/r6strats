import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Type_89: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "Type-89";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 40;
    fireRate = 850;
    destruction: GunDestruction = "low";

    magazine = 21;
    capacity = 181;
    reloadSpeed = 3.3;
    
    controlDifficulty = 2;
    adsTime = 0.52;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();