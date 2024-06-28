import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SR_25: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "marksman rifle";
    acog = true;

    damage = 61;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 21;
    capacity = 141;
    reloadSpeed = 3.5;
    
    controlDifficulty = 3;
    adsTime = 0.52;
    hipAccuracy = 50;

    mobility: Mobility = "0%";
})();