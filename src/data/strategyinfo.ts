import { map } from "./mapInfo";

export type Strategy = {
    map: map;
    operators?: string[];
    site?: string;
    spawn?: string;
    content: JSX.Element;
}
