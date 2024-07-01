import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const G36C: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "G36C";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 38;
    fireRate = 780;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.3;
    
    controlDifficulty = 3;
    adsTime = 0.47;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();