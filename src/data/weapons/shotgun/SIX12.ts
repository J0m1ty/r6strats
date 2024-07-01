import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SIX12: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "SIX12";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 46;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 6;
    capacity = 55;
    reloadSpeed = 2.7;
    
    controlDifficulty = 1;
    adsTime = 0.29;
    hipAccuracy = 55;

    mobility: Mobility = "5%";
})();