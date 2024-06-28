import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M1014: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 28;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 8;
    capacity = 49;
    reloadSpeed = 1.6;
    
    controlDifficulty = 1;
    adsTime = 0.29;
    hipAccuracy = 60;

    mobility: Mobility = "5%";
})();