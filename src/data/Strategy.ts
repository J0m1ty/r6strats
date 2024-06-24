import { Room } from "./Room";
import { Map } from "./Map";
import { Operator } from "./Operator";

export abstract class Strategy {
    abstract name: string;
    abstract description: string;
    abstract map: Map;
    abstract rooms?: Room | Room[];
    abstract operators: Operator | Operator[];
}