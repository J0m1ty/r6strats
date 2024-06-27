import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const OTs_O3: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "sniper rifle";
    acog = false;

    damage = 71;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 16;
    capacity = 106;
    reloadSpeed = 3.4;
    
    adsTime = 0.49;
    mobility: Mobility = "0%";
})();