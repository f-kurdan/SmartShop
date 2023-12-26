export type category = { slug: string, name: string, src: string };

export type cartItem = {
    product: product,
    quantity: number;
}

export type product = {
    id: number;
    SKU: string;
    slug: string,
    name: string;
    brandSlug: string,
    categorySlug: string,
    price: number;
    images: string[];
    specifications: {
        name: string;
        value: string;
    }[]
}

export type productsList = product[]

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