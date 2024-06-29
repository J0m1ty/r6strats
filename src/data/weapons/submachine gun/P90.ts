import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const P90: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "submachine gun";
    acog = true;

    damage = 22;
    fireRate = 970;
    destruction: GunDestruction = "low";

    magazine = 50;
    capacity = 201;
    reloadSpeed = 2.9;
    
    controlDifficulty = 2;
    adsTime = 0.41;
    hipAccuracy = 81;

    mobility: Mobility = "5%";
})();