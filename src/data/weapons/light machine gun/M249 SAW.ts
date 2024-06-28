import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M249_SAW: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "light machine gun";
    acog = true;

    damage = 48;
    fireRate = 650;
    destruction: GunDestruction = "medium";

    magazine = 61;
    capacity = 241;
    reloadSpeed = 4.5;
    
    controlDifficulty = 2;
    adsTime = 0.53;
    hipAccuracy = 60;

    mobility: Mobility = "-10%";
})();