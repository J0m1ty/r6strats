import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const C8_SFW: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "C8-SFW";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 40;
    fireRate = 837;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 2.9;
    
    controlDifficulty = 4;
    adsTime = 0.47;
    hipAccuracy = 70;

    mobility: Mobility = "5%";
})();