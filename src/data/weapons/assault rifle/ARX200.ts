import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const ARX200: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 700;
    destruction: GunDestruction = "medium";

    magazine = 21;
    capacity = 181;
    reloadSpeed = 3.4;
    
    controlDifficulty = 1;
    adsTime = 0.52;
    hipAccuracy = 60;

    mobility: Mobility = "5%";
})();