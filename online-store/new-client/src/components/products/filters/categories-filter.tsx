import useCategories from '@/hooks/useCategories';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, memo } from 'react'

const CategoriesFilter = memo(() => {
    const { isLoading: isCategoriesLoading, data: categories } = useCategories();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathName = usePathname()
    const { replace } = useRouter()
    const selectedCategories = searchParams.get('categoryId')?.split(',')
    console.log(selectedCategories)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            if (params.has('categoryId')) {
                const prevParams = params.get('categoryId')?.toString();
                params.set('categoryId', !!prevParams ? `${prevParams},${e.target.id}` : `${e.target.id}`);
            }
            else {
                params.set('categoryId', e.target.id)
            }
        }
        else {
            let paramsArr = params.get('categoryId')?.split(',')
            paramsArr = paramsArr?.filter(p => !(p === e.target.id))

            if (paramsArr && paramsArr.length)
                params.set('categoryId', paramsArr.join(','));
            else
                params.delete('categoryId')
        }

        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div>
            <h2 className='font-bold mb-2'>Категории</h2>
            {categories?.map(category =>
            (<div key={category.id} className='ml-2'>
                    <input checked={!!selectedCategories?.includes(category.id.toString())} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='category' id={category.id.toString()} value={category.name} />
                    <label htmlFor={category.id.toString()}>{category.name}</label>
            </div>))}
        </div>
    )
})

export default CategoriesFilter