export type category = { slug: string, name: string, src: string };

export type productsList = 
    {
        id: number;
        name: string;
        brand: string;
        price: string;
        photo: string;
        category_id: number;
        characteristics: {
            name: string;
            value: string;
        }[]
    }[] | {
        id: number;
        name: string;
        price: string;
        photo: string;
        category_id: number;
        characteristics: {
            name: string;
            value: string;
        }[]
    }[]
