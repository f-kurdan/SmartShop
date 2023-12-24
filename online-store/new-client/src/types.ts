export type category = { slug: string, name: string, src: string };

export type cartItem = {
    product: product,
    quantity: number;
}

export type product = {
    id: number;
    SKU: string;
    slug: string,
    model: string,
    name: string;
    brand_id: Number
    category_id: number,
    price: number;
    photo: string[];
    specifications: {
        name: string;
        value: string;
    }[]
}

export type productsList =
    {
        id: number;
        SKU: string;
        model: string,
        name: string;
        brand_id: Number
        category_id: number,
        price: number;
        photo: string;
        color: string,
        storage: number,
        specifications: {
            name: string;
            value: string;
        }[]

    }[]

export type brands = {
    id: number;
    name: string;
    slug: string;
    logo: string;
}[] | undefined

export type specifications = {
    id: number;
    charactehcisticName: string;
    options: {
        id: number;
        variation_id: number;
        name: string;
    }[];
}[] | undefined