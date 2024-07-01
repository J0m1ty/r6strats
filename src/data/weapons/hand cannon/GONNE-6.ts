import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const GONNE_6: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "GONNE-6";
    catagory: WeaponCatagory = "hand cannon";
    acog = false;

    damage = 33;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 1;
    capacity = 1;
    reloadSpeed = 0;
    
    controlDifficulty = 1;
    adsTime = 0.22;
    hipAccuracy = 50;

    mobility: Mobility = "10%";
})();