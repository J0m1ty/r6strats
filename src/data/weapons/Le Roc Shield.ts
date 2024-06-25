import { Mobility, Weapon } from "../Weapon";

export const Le_Roc_Shield: Weapon = new (class implements Weapon {
    mobility: Mobility = 28;
})();