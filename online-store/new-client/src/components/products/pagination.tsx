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

    const buttoStyle = 'transition-all duration-300 p-3 bg-white rounded-xl hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer active:opacity-50';
    const prevPage = currentPage > 1 ? createPageURL(currentPage - 1) : null;
    const nextPage = currentPage < totalPages ? createPageURL(currentPage + 1) : null;

    const pages = Array.from({ length: totalPages }, (_, i) => (
        <Link href={createPageURL(i + 1)} key={i}>
            <div className={`py-3 px-5 ${currentPage === i + 1? 'bg-black text-white' : 'bg-white '} ${buttoStyle}`}>{i + 1}</div>
        </Link>
    ))

    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
                {prevPage ? (
                    <Link href={prevPage}>
                        <div className={buttoStyle}>Назад</div>
                    </Link>
                ) : null}
            </div>
            { pages.length > 1 ? pages.map(page => page) : null}
            <div>
                {nextPage ? (
                    <Link href={nextPage}>
                        <div className={buttoStyle}>Вперед</div>
                    </Link>
                ) : null}
            </div>
        </div>
    )
}

export default Pagination
