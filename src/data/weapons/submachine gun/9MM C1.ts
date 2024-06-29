import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const NineMM_C1: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "submachine gun";
    acog = true;

    damage = 34;
    fireRate = 750;
    destruction: GunDestruction = "low";

    magazine = 36;
    capacity = 171;
    reloadSpeed = 2.7;
    
    controlDifficulty = 1;
    adsTime = 0.41;
    hipAccuracy = 76;

    mobility: Mobility = "0%";
})();