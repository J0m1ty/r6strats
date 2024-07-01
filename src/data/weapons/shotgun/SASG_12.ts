import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SASG_12: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "SASG-12";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 26;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 11;
    capacity = 61;
    reloadSpeed = 3.4;
    
    controlDifficulty = 1;
    adsTime = 0.32;
    hipAccuracy = 40;

    mobility: Mobility = "0%";
})();