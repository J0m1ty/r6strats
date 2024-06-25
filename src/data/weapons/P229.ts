import { Gun, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const P229: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 51;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 13;
    capacity = 97;
    reloadSpeed = 2.1;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();