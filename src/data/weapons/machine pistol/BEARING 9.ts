import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const BEARING_9: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "machine pistol";
    acog = false;

    damage = 33;
    fireRate: GunFireRate = 1100;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 126;
    reloadSpeed = 2.7;
    
    adsTime = 0.32;
    mobility: Mobility = "5%";
})();