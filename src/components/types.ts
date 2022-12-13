export interface IItemAttributes {
    code: string;
    name: string;
    color?: string;
    size?: {
        height: number;
        width: number;
    };
    weight?: number;
}

export interface IItem {
    id: number;
    name: string;
    attributes: IItemAttributes[];
}