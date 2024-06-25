import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const P9: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "handgun";
    acog = false;

    damage = 45;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 17;
    capacity = 113;
    reloadSpeed = 2.1;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();