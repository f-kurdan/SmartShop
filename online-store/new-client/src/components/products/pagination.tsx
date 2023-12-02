import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = ({ totalProducts }: { totalProducts?: number }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const params = new URLSearchParams(searchParams);
    const postsPerPage = 12;
    const totalPages = totalProducts ? Math.ceil(totalProducts / postsPerPage) : 1

    const createPageURL = (pageNumber: number | string) => {
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const buttonStyle = 'transition-all duration-300 p-3 bg-white rounded-xl hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer active:opacity-50';

    const prevPage = currentPage > 1 ? createPageURL(currentPage - 1) : null;
    const nextPage = currentPage < totalPages ? createPageURL(currentPage + 1) : null;

    const pages = Array.from({ length: totalPages }, (_, i) => (i))

    const startIndex = pages[0]
    const endIndex = pages.length - 10

    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
                {prevPage ? (
                    <Link href={prevPage}>
                        <div className={buttonStyle}>Назад</div>
                    </Link>
                ) : null}
            </div>
            {pages.length > 1 ? pages.map(page => {
                if ((pages.length >= 5) && ((currentPage + 3 < pages.length && page === currentPage + 2) 
                || (currentPage > pages.length - 1 && page === currentPage - 4))
                ) {
                    return (<div className={`py-3 px-5 bg-white ${buttonStyle}`}>...</div>)
                }
                else
                    return (<Link href={createPageURL(page + 1)} key={page}>
                        <div className={`py-3 px-5 ${currentPage === page + 1 ? 'bg-purple-300 text-white' : 'bg-white '} ${buttonStyle}`}>{page + 1}</div>
                    </Link>)
            }) : null}
            <div>
                {nextPage ? (
                    <Link href={nextPage}>
                        <div className={buttonStyle}>Вперед</div>
                    </Link>
                ) : null}
            </div>
        </div>
    )
}

export default Pagination
