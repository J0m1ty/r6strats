import { Mobility, Weapon, WeaponCatagory } from "../Weapon";

export const Balistic_Shield: Weapon = new (class implements Weapon {
    catagory: WeaponCatagory = "shield";
    mobility: Mobility = 30;
})();