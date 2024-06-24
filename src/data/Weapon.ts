export type Mobility = number | `-${number}%` | `${number}%`;

export abstract class Weapon {
    abstract mobility: Mobility;
}