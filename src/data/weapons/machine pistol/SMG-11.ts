import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SMG_11: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "machine pistol";
    acog = false;

    damage = 32;
    fireRate: GunFireRate = 1270;
    destruction: GunDestruction = "low";

    magazine = 16;
    capacity = 113;
    reloadSpeed = 2.7;
    
    adsTime = 0.32;
    mobility: Mobility = "0%";
})();