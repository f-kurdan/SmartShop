import { product, productsList } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const ProductsList = ({ products }: { products: productsList }) => {
    const createURL = (slug: string) => {
        return (`/products/${slug}`)
    }

    const getFullName = (product: product) => {
        return `${product.name}, ${product.productInfo.find(s => s?.name?.trim().toLocaleLowerCase() === "память")?.description}, ${product.productInfo.find(s => s?.name?.trim().toLocaleLowerCase() === "цвет")?.description}`
    }

    return (
        <div className='flex flex-row gap-2 flex-wrap justify-start items-center'>
            {products.map((product) =>
            (<Link key={product.id} className='' href={createURL(product.slug)}>
                <div className=' transition-all duration-300 flex flex-col gap-2 justify-evenly items-center p-5 bg-white hover:shadow-lg hover:shadow-black/30 cursor-pointer active:opacity-80 w-72 h-80'>
                    <Image className='max-h-44 max-w-min' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${product.images[0]}`} alt={product.name} width={200} height={200} />
                    <div className='justify-self-end'>
                        <div className='text-sm font-bold text-center  hover:text-cyan-500 active:text-lime-400 '>
                            {getFullName(product)}</div>
                        <div className='text-md text-center font-extralight'>{product.price} ₽</div>
                    </div>
                </div>
            </Link>)
            )}
        </div>
    )
}

export default ProductsList