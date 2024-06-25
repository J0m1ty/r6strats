import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const M45_MEUSOC: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "handgun";
    acog = false;

    damage = 58;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 8;
    capacity = 78;
    reloadSpeed = 1.9;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();