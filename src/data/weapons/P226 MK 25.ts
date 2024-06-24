import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const P226_MK_25: Gun = new (class implements Gun {
    type: GunType = "secondary";
    catagory: GunCatagory = "handgun";
    acog = false;

    damage = 50;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 16;
    capacity = 97;
    reloadSpeed = 2.1;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();