import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const M1014: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "shotgun";
    acog = false;

    damage = 28;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 8;
    capacity = 49;
    reloadSpeed = 1.6;
    
    adsTime = 0.29;
    mobility: Mobility = "5%";
})();