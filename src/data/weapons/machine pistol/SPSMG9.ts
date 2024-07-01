import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const SPSMG9: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "machine pistol";
    acog = false;

    damage = 33;
    fireRate: GunFireRate = 980;
    destruction: GunDestruction = "low";

    magazine = 21;
    capacity = 121;
    reloadSpeed = 2.7;
    
    controlDifficulty = 4;
    adsTime = 0.36;
    hipAccuracy = 50;

    mobility: Mobility = "5%";
})();