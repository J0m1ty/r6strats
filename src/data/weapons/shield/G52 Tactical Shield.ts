import { Mobility, Weapon, WeaponCatagory } from "../../Weapon";

export const G52_Tactical_Shield: Weapon = new (class implements Weapon {
    name = "G52 Tactical Shield";
    catagory: WeaponCatagory = "shield";
    mobility: Mobility = 30;
})();