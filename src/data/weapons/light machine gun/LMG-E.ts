import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const LMG_E: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "light machine gun";
    acog = true;

    damage = 41;
    fireRate = 720;
    destruction: GunDestruction = "medium";

    magazine = 150;
    capacity = 301;
    reloadSpeed = 6.5;
    
    controlDifficulty = 2;
    adsTime = 0.56;
    hipAccuracy = 60;

    mobility: Mobility = "-10%";
})();