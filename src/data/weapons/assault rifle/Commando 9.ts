import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Commando_9: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "Commando 9";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 36;
    fireRate = 780;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 176;
    reloadSpeed = 2.5;
    
    controlDifficulty = 1;
    adsTime = 0.49;
    hipAccuracy = 65;

    mobility: Mobility = "0%";
})();