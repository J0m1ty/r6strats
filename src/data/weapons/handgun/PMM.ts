import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const PMM: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 61;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 9;
    capacity = 81;
    reloadSpeed = 1.9;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();