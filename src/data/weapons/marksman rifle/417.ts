import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Four17: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "marksman rifle";
    acog = true;

    damage = 69;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 20;
    capacity = 161;
    reloadSpeed = 3.3;
    
    adsTime = 0.52;
    mobility: Mobility = "0%";
})();