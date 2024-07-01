import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const CAMRS: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "CAMRS";
    catagory: WeaponCatagory = "marksman rifle";
    acog = true;

    damage = 69;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 21;
    capacity = 141;
    reloadSpeed = 3.4;
    
    controlDifficulty = 2;
    adsTime = 0.47;
    hipAccuracy = 50;

    mobility: Mobility = "5%";
})();