import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const DP27: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "DP27";
    catagory: WeaponCatagory = "submachine gun";
    acog = false;

    damage = 60;
    fireRate = 550;
    destruction: GunDestruction = "full";

    magazine = 70;
    capacity = 281;
    reloadSpeed = 4.6;
    
    controlDifficulty = 1;
    adsTime = 0.53;
    hipAccuracy = 60;

    mobility: Mobility = "-5%";
})();