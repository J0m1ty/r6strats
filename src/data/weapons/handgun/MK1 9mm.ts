import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const MK1_9mm: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 48;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 14;
    capacity = 105;
    reloadSpeed = 1.9;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();