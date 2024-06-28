import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const GSH_18: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 44;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "medium";

    magazine = 19;
    capacity = 109;
    reloadSpeed = 2.26;
    
    controlDifficulty = 1;
    adsTime = 0.22;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();