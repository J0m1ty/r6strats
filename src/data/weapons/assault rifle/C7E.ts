import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const C7E: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "C7E";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 42;
    fireRate = 800;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 176;
    reloadSpeed = 2.8;
    
    controlDifficulty = 2;
    adsTime = 0.52;
    hipAccuracy = 70;

    mobility: Mobility = "5%";
})();