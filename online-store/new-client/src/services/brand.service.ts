const brandsURL = 'http://localhost:5000/brands'

class brandService {
  // getBrands = async () => {
  //   const brandIDs = products.map(p => p.brand_id)
  //   return Promise.resolve(brands.filter(b => brandIDs.includes(b.id)))
  // }

  async createBrand(formData?: FormData) {
    const res = await fetch(brandsURL, {
      method: "POST",
      body: formData
  })

  if (!res.ok)
  throw new Error('Не удалось загрузить файл');
  }
}

export default new brandService()