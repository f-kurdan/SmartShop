import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = ({totalPages}:{totalPages:number}) => { 
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
      };
    
    const prevPage = currentPage > 1? createPageURL(currentPage - 1) : null;

    const nextPage = currentPage < totalPages? createPageURL(currentPage + 1) : null;

    const pages = Array.from({ length: totalPages }, (_, i) => (
        <div key={i} >
            <Link href={createPageURL(i + 1)}>
                <div className='p-4 bg-white'>{i + 1}</div>
            </Link>
        </div>
    ))
      
    return (
        <div className='flex gap-2 items-center justify-center'>        
            {pages.map(page => page)}
        </div>
    )
}

export default Pagination
