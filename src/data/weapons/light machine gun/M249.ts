import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M249: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "M249";
    catagory: WeaponCatagory = "light machine gun";
    acog = true;

    damage = 48;
    fireRate = 650;
    destruction: GunDestruction = "medium";

    magazine = 100;
    capacity = 301;
    reloadSpeed = 7.6;
    
    controlDifficulty = 2;
    adsTime = 0.53;
    hipAccuracy = 60;

    mobility: Mobility = "-10%";
})();