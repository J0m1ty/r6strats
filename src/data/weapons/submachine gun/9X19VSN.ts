import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const NINEX19VSN: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "submachine gun";
    acog = false;

    damage = 34;
    fireRate = 750;
    destruction: GunDestruction = "low";

    magazine = 30;
    capacity = 181;
    reloadSpeed = 3.16;
    
    controlDifficulty = 2;
    adsTime = 0.39;
    hipAccuracy = 76;

    mobility: Mobility = "0%";
})();