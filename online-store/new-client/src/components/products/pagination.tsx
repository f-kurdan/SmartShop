import useTotalProducts from '@/hooks/useTotalProducts';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter()
    const currentPage = Number(searchParams.get('page')) || 1;
    const params = new URLSearchParams(searchParams);
    const {data: totalProducts} = useTotalProducts()
    const postsPerPage = 12;
    const totalPages = totalProducts ? Math.ceil(totalProducts / postsPerPage) : 1

    const createPageURL = (pageNumber: number | string) => {
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
      };

    const onClick = (pageNum: number) => {
        replace(createPageURL(pageNum))
    }

    const prevPage = currentPage > 1? createPageURL(currentPage - 1) : null;

    const nextPage = currentPage < totalPages? createPageURL(currentPage + 1) : null;

    const pages = Array.from({ length: totalPages }, (_, i) => (
        <div key={i} onClick={() => onClick(i + 1)}>
                <div className='p-4 bg-white'>{i + 1}</div>
        </div>
    ))

    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
            {prevPage ? (
                <Link href={prevPage}> 
                <div className='p-4 bg-white'>Назад</div>
                </Link>
            ) : null}
            </div>
            {pages.map(page => page)}
            <div>
            {nextPage ? (
                <Link href={nextPage}> 
                <div className='p-4 bg-white'>Вперед</div>
                </Link>
            ) : null}
            </div>
        </div>
    )
}

export default Pagination
