import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const LFP586: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "handgun";
    acog = false;

    damage = 78;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "medium";

    magazine = 6;
    capacity = 61;
    reloadSpeed = 4;
    
    adsTime = 0.22;
    mobility: Mobility = "10%";
})();