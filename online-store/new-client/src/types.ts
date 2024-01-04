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
    productInfo: {
        name: string;
        description: string;
    }[]
}

export type productsList = product[]

export type brands = {
    id: number;
    name: string;
    slug: string;
    logo: string;
}[] | undefined

export type specification = {
    id: number;
    name: string;
    description: string;
}

export type category = {
    id: number;
    name: string;
    slug: string;
    products: productsList;
    image: string
}