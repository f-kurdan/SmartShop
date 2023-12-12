import { products } from "@/data"

export function getColors(model?: string, storage?: number) {
    if (storage)
        return Promise.resolve(products.filter(p => p.model === model && p.storage === storage).map(p => p.color).sort())
    return Promise.resolve(products.filter(p => p.model === model).map(p => p.color).sort())
}

export function getStorageSizes(model?: string, color?: string) {
    if (color)
        return Promise.resolve(products.filter(p => p.model === model && p.color === color ).map(p => p.storage))
    return Promise.resolve(products.filter(p => p.model === model).map(p => p.storage))
}