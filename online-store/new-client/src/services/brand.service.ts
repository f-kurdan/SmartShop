import { brand, FetchError } from "../types"

const brandsURL = 'http://localhost:5000/brands'


class brandService {
  async getBrands() {
    const res = await fetch(brandsURL);
    const brands: brand[] = await res.json();
    return brands;
  }

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