export class Card {
    id: number;
    front: string;
    back: string;
    title: string;
    // Originally the below were a part of the attributes model (depricated)
    year: number;
    type: string;
    system: string[];
    CCP: number[];
}