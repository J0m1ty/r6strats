import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const MP7: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "submachine gun";
    acog = false;

    damage = 32;
    fireRate = 900;
    destruction: GunDestruction = "low";

    magazine = 30;
    capacity = 181;
    reloadSpeed = 2.8;
    
    controlDifficulty = 3;
    adsTime = 0.39;
    hipAccuracy = 71;

    mobility: Mobility = "5%";
})();