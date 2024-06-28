import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const One911_TACOPS: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 55;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 9;
    capacity = 73;
    reloadSpeed = 2.2;
    
    controlDifficulty = 2;
    adsTime = 0.22;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();