import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const AR_15_50: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "AR-15.50";
    catagory: WeaponCatagory = "marksman rifle";
    acog = true;

    damage = 67;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 11;
    capacity = 101;
    reloadSpeed = 3.1;
    
    controlDifficulty = 2;
    adsTime = 0.52;
    hipAccuracy = 50;

    mobility: Mobility = "0%";
})();