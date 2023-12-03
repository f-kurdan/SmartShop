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

    const buttonStyle = 'transition-all duration-300 p-3 bg-white rounded-xl hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer active:opacity-50 ';

    const prevPage = currentPage > 1 ? createPageURL(currentPage - 1) : null;
    const nextPage = currentPage < totalPages ? createPageURL(currentPage + 1) : null;

    const pages = Array.from({ length: totalPages }, (_, i) => (i + 1))
    const links = pages.map(page => {
        if ((pages.length >= 5) && (page !== 1) && (page !== pages.length) && (page > currentPage - 2 && page < currentPage + 2)
        ) {
            // return (<div className={`py-3 px-5 bg-white ${buttonStyle}`}>...</div>)
            return (<Link href={createPageURL(page)} key={page}>
                <div className={`py-3 px-5 ${currentPage === page ? ' bg-cyan-200 text-cyan-700' : 'bg-white '} ${buttonStyle}`}>{page}</div>
            </Link>)
        }
    })

    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
                {prevPage ? (
                    <Link href={prevPage}>
                        <div className={buttonStyle}>Назад</div>
                    </Link>
                ) : null}
            </div>
            <Link href={createPageURL(1)}>
                <div className={`py-3 px-5 ${currentPage === 1 ? ' bg-cyan-200 text-cyan-700' : 'bg-white '} ${buttonStyle}`}>{1}</div>
            </Link>
            {currentPage - 2 > 1 ? (<div className={`py-3 px-5 bg-white ${buttonStyle}`}>...</div>) : null}
            {links.length > 1 ? links.map(link => link) : null}
            {currentPage + 2 < pages.length ? (<div className={`py-3 px-5 bg-white ${buttonStyle}`}>...</div>) : null}
            <Link href={createPageURL(pages.length)}>
                <div className={`py-3 px-5 ${currentPage === pages.length ? ' bg-cyan-200 text-cyan-700' : 'bg-white '} ${buttonStyle}`}>{pages.length}</div>
            </Link>
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
