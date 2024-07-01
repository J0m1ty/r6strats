import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Mk_14_EBR: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "Mk 14 EBR";
    catagory: WeaponCatagory = "marksman rifle";
    acog = true;

    damage = 60;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 21;
    capacity = 121;
    reloadSpeed = 3.4;
    
    controlDifficulty = 3;
    adsTime = 0.52;
    hipAccuracy = 50;

    mobility: Mobility = "0%";
})();