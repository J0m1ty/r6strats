import { Gun, GunDestruction, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const PARA_308: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 650;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.3;
    
    adsTime = 0.47;
    mobility: Mobility = "0%";
})();