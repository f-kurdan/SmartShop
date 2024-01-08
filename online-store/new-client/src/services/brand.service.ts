import { FetchError } from "../types"

const brandsURL = 'http://localhost:5000/brands'


class brandService {
  // getBrands = async () => {
  //   const brandIDs = products.map(p => p.brand_id)
  //   return Promise.resolve(brands.filter(b => brandIDs.includes(b.id)))
  // }

  async createBrand(formData?: FormData) {
    return fetch(brandsURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'name': formData?.get('name') })
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new FetchError(res)
      }
    })
  }
}
export default new brandService()