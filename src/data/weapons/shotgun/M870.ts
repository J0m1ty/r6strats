import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M870: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 42;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 7;
    capacity = 50;
    reloadSpeed = 1.3;
    
    controlDifficulty = 1;
    adsTime = 0.32;
    hipAccuracy = 55;

    mobility: Mobility = "5%";
})();