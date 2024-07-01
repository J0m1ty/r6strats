import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const CSRX_300: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "sniper rifle";
    acog = false;

    damage = 135;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 6;
    capacity = 36;
    reloadSpeed = 3.1;
    
    controlDifficulty = 2;
    adsTime = 0.45;
    hipAccuracy = 1;

    mobility: Mobility = "5%";
})();