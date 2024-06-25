import { Gun, GunDestruction, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const MK17_CQB: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 40;
    fireRate = 585;
    destruction: GunDestruction = "medium";

    magazine = 21;
    capacity = 181;
    reloadSpeed = 3.1;
    
    adsTime = 0.52;
    mobility: Mobility = "0%";
})();