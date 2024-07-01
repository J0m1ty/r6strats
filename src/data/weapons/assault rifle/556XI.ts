import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Five56xi: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "556xi";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 690;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.7;
    
    controlDifficulty = 1;
    adsTime = 0.52;
    hipAccuracy = 70;

    mobility: Mobility = "0%";
})();