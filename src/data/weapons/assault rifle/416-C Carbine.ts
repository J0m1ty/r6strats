import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Four16_C_Carbine: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "416-C Carbine";
    catagory: WeaponCatagory = "assault rifle";
    acog = false;

    damage = 38;
    fireRate = 740;
    destruction: GunDestruction = "low";

    magazine = 25;
    capacity = 176;
    reloadSpeed = 3.4;
    
    controlDifficulty = 3;
    adsTime = 0.44;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();