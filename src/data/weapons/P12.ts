import { Gun, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const P12: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 44;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 16;
    capacity = 106;
    reloadSpeed = 2.4;
    
    adsTime = 0.19;
    mobility: Mobility = "10%";
})();