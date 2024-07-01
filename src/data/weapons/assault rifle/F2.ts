import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const F2: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "F2";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 37;
    fireRate = 980;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 176;
    reloadSpeed = 3.1;
    
    controlDifficulty = 4;
    adsTime = 0.47;
    hipAccuracy = 70;

    mobility: Mobility = "5%";
})();