import { brands, products } from "@/data"

export const getBrands = () => {
    const brandIDs = products.map(p => p.brand_id)
    return Promise.resolve(brands.filter(b => brandIDs.includes(b.id)))
  }