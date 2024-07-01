import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const MP5: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "MP5";
    catagory: WeaponCatagory = "submachine gun";
    acog = true;

    damage = 27;
    fireRate = 800;
    destruction: GunDestruction = "low";

    magazine = 30;
    capacity = 181;
    reloadSpeed = 2.9;
    
    controlDifficulty = 2;
    adsTime = 0.41;
    hipAccuracy = 81;

    mobility: Mobility = "0%";
})();