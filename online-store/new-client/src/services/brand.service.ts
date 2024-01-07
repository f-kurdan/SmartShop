const brandsURL = 'http://localhost:5000/brands'

class brandService {
  // getBrands = async () => {
  //   const brandIDs = products.map(p => p.brand_id)
  //   return Promise.resolve(brands.filter(b => brandIDs.includes(b.id)))
  // }

  async createBrand(formData?: FormData) {
    const res = await fetch(brandsURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'name': formData?.get('name')})
    })

    if (!res.ok){
      console.log(res.text)
      throw new Error('Не удалось создать бренд');}
  }
}

export default new brandService()