import { product } from '@/types'
import ColorOptions from './color-options'
import Price from './price'
import Specs from './specs'
import StorageOptions from './storage-options'


const ProductInfo = ({ data }: {
    data: product | undefined
}) => {
    const fullName = `${data?.name},  ${data?.productInfo?.find(s => s.name === "Память")?.description}гб, ${data?.productInfo?.find(s => s.name === "Цвет")?.description}`
    return (
        <div className='flex flex-col w-[400px] justify-start items-start text-base px-3'>
            <p className='font-black text-lg w-full'>{fullName}</p>
            <ColorOptions />
            {/* <StorageOptions model={data?.model} /> */}
            <Price product={data!} />
            <Specs product={data!} />
        </div>
    )
}


export default ProductInfo