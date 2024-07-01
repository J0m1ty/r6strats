import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Super_Shorty: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "Super Shorty";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 35;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 3;
    capacity = 46;
    reloadSpeed = 1.55;
    
    controlDifficulty = 1;
    adsTime = 0.29;
    hipAccuracy = 40;

    mobility: Mobility = "5%";
})();