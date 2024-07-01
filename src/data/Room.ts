export type Letter = "A" | "B";
export type Site = {
    bomb?: {
        id: number;
        name: string;
        letter: Letter;
    },
    hostage?: {
        id: number;
    },
    secure?: {
        id: number;
    }
};

export type Room = {
    name: string;
    site?: Site;
};