import { product, productsList } from '@/types'
import Link from 'next/link'
import NoItems from './no-items'
import ProductImage from './product-image'

const ProductsList = ({ products }: { products: productsList }) => {
    const createURL = (slug: string) => {
        return (`/products/${slug}`)
    }

    const getFullName = (product: product) => {
        const color = `${product.productInfo.find(s => s?.name?.trim().toLocaleLowerCase() === "цвет")?.description}`
        const storageSize = `${product.productInfo.find(s => s?.name?.trim().toLocaleLowerCase() === "память")?.description},`
        return `${product.name}, ${storageSize} ${color}`
    }

    return  products?.length ? (
        <div className='flex flex-row gap-2 flex-wrap justify-start items-center'>
            {products.map((product) =>
            (<Link key={product.id} href={createURL(product.slug)}>
                <div className=' transition-all duration-300 flex flex-col gap-2 justify-evenly items-center p-5 bg-white hover:shadow-lg hover:shadow-black/30 cursor-pointer active:opacity-80 w-72 h-80'>
                    <ProductImage name={product.name}
                        image={product.images[0]} />
                    <div className='justify-self-end'>
                        <div className='text-sm font-bold text-center  hover:text-cyan-500 active:text-lime-400 '>
                            {getFullName(product)}</div>
                        <div className='text-md text-center font-extralight'>{product.price} ₽</div>
                    </div>
                </div>
            </Link>)
            )}
        </div>
    ) : (
        <NoItems />
    )
}

export default ProductsList