import { Mobility, Weapon, WeaponCatagory } from "../../Weapon";

export const Le_Roc_Shield: Weapon = new (class implements Weapon {
    name = "Le Roc Shield";
    catagory: WeaponCatagory = "shield";
    mobility: Mobility = 28;
})();