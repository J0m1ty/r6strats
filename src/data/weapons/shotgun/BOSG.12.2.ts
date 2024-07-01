import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const BOSG_12_2: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "BOSG.12.2";
    catagory: WeaponCatagory = "shotgun";
    acog = true;

    damage = 125;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 2;
    capacity = 61;
    reloadSpeed = 1.2;
    
    controlDifficulty = 2;
    adsTime = 0.47;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();