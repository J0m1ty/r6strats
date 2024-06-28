import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const P226_MK_25: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 50;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 16;
    capacity = 97;
    reloadSpeed = 2.1;
    
    controlDifficulty = 2;
    adsTime = 0.22;
    hipAccuracy = 75;
    
    mobility: Mobility = "10%";
})();