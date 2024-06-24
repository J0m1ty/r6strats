import { Gun, GunCatagory, GunDestruction, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const M249: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "light machine gun";
    acog = true;

    damage = 48;
    fireRate = 650;
    destruction: GunDestruction = "medium";

    magazine = 100;
    capacity = 301;
    reloadSpeed = 7.6;
    
    adsTime = 0.53;
    mobility: Mobility = "-10%";
})();