import { getStorageSizes } from '@/services/charachteristics.service'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'

const StorageOptions = ({ model }: { model?: string }) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const path = usePathname()
    const selectedColor = params?.get('color') ?? "white";
    const selectedStorageSize = Number(params?.get('storage')) ?? 128;

    const { data: storageSizes } = useQuery(['storage', model, selectedColor], () => getStorageSizes(model, selectedColor))

    const changeStorageSize = (storage: string) => {
        params.set('storage', storage)
        router.replace(`${path}?${params}`)
    }

    return (
        <div className='flex flex-row gap-2 justify-center items-center mt-5'>
            {storageSizes?.map((size, index) =>
            (
                <div onClick={() => changeStorageSize(size.toString())} key={index} className={`border-2 p-3 rounded-3xl cursor-pointer ${size === selectedStorageSize ? "outline outline-[3] outline-cyan-200" : ""}`}>{size} {size > 32 ? `Гб` : 'Тб'}</div>
            ))}
        </div>
    )
}

export default StorageOptions