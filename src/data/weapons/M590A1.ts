import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const M590A1: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "shotgun";
    acog = false;

    damage = 48;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 7;
    capacity = 50;
    reloadSpeed = 1.6;
    
    adsTime = 0.32;
    mobility: Mobility = "5%";
})();