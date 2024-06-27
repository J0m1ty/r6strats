import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const ITA12S: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 29;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 5;
    capacity = 36;
    reloadSpeed = 2.1;
    
    adsTime = 0.29;
    mobility: Mobility = "5%";
})();