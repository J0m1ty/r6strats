import { Gun, GunCatagory, GunDestruction, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const F2: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "assault rifle";
    acog = true;

    damage = 37;
    fireRate = 980;
    destruction: GunDestruction = "low";

    magazine = 26;
    capacity = 176;
    reloadSpeed = 3.1;
    
    adsTime = 0.47;
    mobility: Mobility = "5%";
})();