import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Five_Seven_USG: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 42;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 21;
    capacity = 121;
    reloadSpeed = 2.4;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();