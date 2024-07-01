import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const ITA12L: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "ITA12L";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 41;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 8;
    capacity = 57;
    reloadSpeed = 2.1;
    
    controlDifficulty = 1;
    adsTime = 0.29;
    hipAccuracy = 47;

    mobility: Mobility = "5%";
})();