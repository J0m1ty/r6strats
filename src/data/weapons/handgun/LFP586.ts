import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const LFP586: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "LFP586";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 78;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "medium";

    magazine = 6;
    capacity = 61;
    reloadSpeed = 4;
    
    controlDifficulty = 3;
    adsTime = 0.22;
    hipAccuracy = 50;

    mobility: Mobility = "10%";
})();