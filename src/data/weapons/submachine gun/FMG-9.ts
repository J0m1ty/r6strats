import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const FMG_9: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "FMG-9";
    catagory: WeaponCatagory = "submachine gun";
    acog = false;

    damage = 34;
    fireRate = 800;
    destruction: GunDestruction = "low";

    magazine = 30;
    capacity = 181;
    reloadSpeed = 2.96;
    
    controlDifficulty = 2;
    adsTime = 0.39;
    hipAccuracy = 70;

    mobility: Mobility = "5%";
})();