import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const T_95_LSW: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "T-95 LSW";
    catagory: WeaponCatagory = "light machine gun";
    acog = true;

    damage = 46;
    fireRate = 650;
    destruction: GunDestruction = "medium";

    magazine = 81;
    capacity = 241;
    reloadSpeed = 3;
    
    controlDifficulty = 2;
    adsTime = 0.5;
    hipAccuracy = 60;

    mobility: Mobility = "-10%";
})();