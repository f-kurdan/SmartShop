import { type } from "os";

export type category = { slug: string, name: string, src: string };

export type productsList = 
    {
        id: number;
        name: string;
        brand_id: Number
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
        brand_id: Number
        price: string;
        photo: string;
        category_id: number;
        characteristics: {
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