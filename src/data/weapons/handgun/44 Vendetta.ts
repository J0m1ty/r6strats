import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Fourty4_Vendetta: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 78;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 6;
    capacity = 66;
    reloadSpeed = 3;
    
    controlDifficulty = 1;
    adsTime = 0.19;
    hipAccuracy = 50;

    mobility: Mobility = "10%";
})();