import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const SG_CQB: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "shotgun";
    acog = true;

    damage = 44;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 7;
    capacity = 50;
    reloadSpeed = 1.6;
    
    adsTime = 0.29;
    mobility: Mobility = "0%";
})();