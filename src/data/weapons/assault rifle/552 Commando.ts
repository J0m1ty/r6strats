import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Five52_Commando: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "552 Commando"
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 43;
    fireRate = 690;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.1;
    
    controlDifficulty = 2;
    adsTime = 0.52;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();