import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const MP5K: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "submachine gun";
    acog = false;

    damage = 30;
    fireRate = 800;
    destruction: GunDestruction = "low";

    magazine = 30;
    capacity = 181;
    reloadSpeed = 2.8;
    
    controlDifficulty = 2;
    adsTime = 0.39;
    hipAccuracy = 76;

    mobility: Mobility = "5%";
})();