import { Gun, GunDestruction, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const G8A1: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "light machine gun";
    acog = true;

    damage = 37;
    fireRate = 850;
    destruction: GunDestruction = "medium";

    magazine = 51;
    capacity = 251;
    reloadSpeed = 3.9;
    
    adsTime = 0.56;
    mobility: Mobility = "-10%";
})();