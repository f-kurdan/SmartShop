import { productsList } from '@/types'
import Filter from './filters/filter'
import { montserrat } from '@/styles/fonts'
import ProductsList from './products-list'
import ProductsLoading from './fillers/products-loading'
import Pagination from './pagination'

const Catalog = ({ products, totalPages, currentPage }: { products: productsList, totalPages: number, currentPage: number }) => {
  return (
    <div className={`${montserrat.className} flex flex-row relative w-full justify-center min-h-[80vh] gap-4 items-start my-3 text-gray-700`}>
      <Filter />
      <div className='flex flex-col gap-2 w-2/3 min-h-fit mr-10'>
        {products?.length ? <ProductsList products={products} /> : <ProductsLoading />}
        <Pagination totalPages={totalPages}
        currentPage={currentPage} />
      </div>
    </div>
  )
}

export default Catalog