import { Mobility, Weapon, WeaponCatagory } from "../../Weapon";

export const LE_ROC_SHIELD: Weapon = new (class implements Weapon {
    catagory: WeaponCatagory = "shield";
    mobility: Mobility = 28;
})();