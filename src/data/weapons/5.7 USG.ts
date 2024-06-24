import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const Five_Seven_USG: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "handgun";
    acog = false;

    damage = 42;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 21;
    capacity = 121;
    reloadSpeed = 2.4;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();