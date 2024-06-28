import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const PDW9: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "submachine gun";
    acog = true;

    damage = 34;
    fireRate = 800;
    destruction: GunDestruction = "low";

    magazine = 51;
    capacity = 201;
    reloadSpeed = 3.37;
    
    controlDifficulty = 2;
    adsTime = 0.46;
    hipAccuracy = 75;

    mobility: Mobility = "0%";
})();