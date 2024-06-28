import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Supernova: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 48;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 7;
    capacity = 57;
    reloadSpeed = 1.6;
    
    controlDifficulty = 1;
    adsTime = 0.29;
    hipAccuracy = 30;

    mobility: Mobility = "5%";
})();