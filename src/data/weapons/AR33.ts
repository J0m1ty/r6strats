import { Gun, GunDestruction, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const AR33: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 41;
    fireRate = 749;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 176;
    reloadSpeed = 3.3;
    
    adsTime = 0.47;
    mobility: Mobility = "0%";
})();