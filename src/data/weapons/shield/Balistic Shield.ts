import { Mobility, Weapon, WeaponCatagory } from "../../Weapon";

export const Balistic_Shield: Weapon = new (class implements Weapon {
    name = "Balistic Shield";
    catagory: WeaponCatagory = "shield";
    mobility: Mobility = 30;
})();