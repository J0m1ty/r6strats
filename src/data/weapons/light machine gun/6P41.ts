import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SixP41: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "6P41";
    catagory: WeaponCatagory = "light machine gun";
    acog = true;

    damage = 46;
    fireRate = 680;
    destruction: GunDestruction = "medium";

    magazine = 100;
    capacity = 301;
    reloadSpeed = 8.5;
    
    controlDifficulty = 3;
    adsTime = 0.56;
    hipAccuracy = 60;

    mobility: Mobility = "-10%";
})();