import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const UMP45: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "UMP45";
    catagory: WeaponCatagory = "submachine gun";
    acog = true;

    damage = 38;
    fireRate = 600;
    destruction: GunDestruction = "low";

    magazine = 25;
    capacity = 176;
    reloadSpeed = 2.9;
    
    controlDifficulty = 2;
    adsTime = 0.41;
    hipAccuracy = 75;

    mobility: Mobility = "0%";
})();