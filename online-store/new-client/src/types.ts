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

export type brand = {
    id: number;
    name: string;
    slug: string;
}

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

export class FetchError extends Error {
  constructor(public res: Response, message?: string) {
    super(message)
  }
}