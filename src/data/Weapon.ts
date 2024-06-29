export type WeaponCatagory = "revolver" | "shield" | "hand cannon" | "assault rifle" | "submachine gun" | "shotgun" | "marksman rifle" | "sniper rifle" | "light machine gun" | "handgun" | "machine pistol";
export type Mobility = number | `-${number}%` | `${number}%`;

export abstract class Weapon {
    abstract catagory: WeaponCatagory;
    abstract mobility: Mobility;
}