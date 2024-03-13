export type cartItem = {
    product: product,
    quantity: number;
}

export type product = {
    id: number;
    SKU: string;
    slug: string,
    name: string;
    brand: brand,
    brandId: number,
    category: category,
    categoryId: number,
    price: number;
    quantity: number;
    images: string[];
    productInfo: [({
        id: number,
        name?: string;
        description?: string;
    } | undefined)?]
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

export type ProductInfo = {
    id: number
    title: string,
    description: string,
}


export type ProductFormInputs = {
    id: number,
    categorySlug: string,
    brandSlug: string,
    name: string,
    price: number,
    images: FileList | File[],
    quantity: number,
    specs: [{
        id: number,
        name: string,
        description: string
    }]
}

export type Payload = {
    userId: string;
    sub: number;
    iat: number;
    exp: number;
}

export type User = {
    id: number | string;
    username: string;
    email: string;
    role: string;
    phone: string;
    orders: Order[]
}

export type Order = {
    id: number;
    user: User;
    userId: number;
    orderDate: Date;
    paymentMethod: string;
    shippingAddress: string;
    shippingMethod: string;
    orderTotal: number;
    orderStatus: string;
    orderItem: OrderItem[];
}

export type OrderItem = {
    id: number;
    productId: number;
    orderId: number;
    quantity: number;
    price: number;
}