import { Gun, GunCatagory, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const ITA12S: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "shotgun";
    acog = false;

    damage = 29;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 5;
    capacity = 36;
    reloadSpeed = 2.1;
    
    adsTime = 0.29;
    mobility: Mobility = "5%";
})();