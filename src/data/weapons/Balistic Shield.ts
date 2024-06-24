import { Mobility, Weapon } from "../Weapon";

export const Balistic_Shield: Weapon = new (class implements Weapon {
    mobility: Mobility = 30;
})();