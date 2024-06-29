import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const BAILIFF_410: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "revolver";
    acog = false;

    damage = 30;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 5;
    capacity = 46;
    reloadSpeed = 4.8;
    
    controlDifficulty = 2;
    adsTime = 0.21;
    hipAccuracy = 60;

    mobility: Mobility = "10%";
})();