import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M4: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 750;
    destruction: GunDestruction = "medium";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.6;
    
    adsTime = 0.52;
    mobility: Mobility = "0%";
})();