import { type } from "os";

export type category = { slug: string, name: string, src: string };

export type productsList = 
    {
        id: number;
        SKU: string;
        model: string,
        name: string;
        brand_id: Number
        category_id:number,
        price: string;
        photo: string;
        color: string,
        storage: number,  
        characteristics: {
            name: string;
            value: string;
        }[]
        
    }[] | {
        id: number;
        SKU: string;
        model: string,
        name: string;
        brand_id: Number
        category_id:number,
        price: string;
        photo: string;
        color: string,
        storage: number, 
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

export type characteristics = {
    id: number;
    charactehcisticName: string;
    options: {
        id: number;
        variation_id: number;
        name: string;
    }[];
}[] | undefined