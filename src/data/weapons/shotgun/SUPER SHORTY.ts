import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SUPER_SHORTY: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 35;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 3;
    capacity = 46;
    reloadSpeed = 1.55;
    
    adsTime = 0.29;
    mobility: Mobility = "5%";
})();