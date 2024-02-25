import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = ({ totalPages, currentPage }: { totalPages?: number, currentPage: number  }) => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const createPageURL = (pageNumber: number | string) => {
        return `${pageNumber}?${params.toString()}`;
    };

    const buttonStyle = 'transition-all duration-300 p-3 bg-white rounded-xl hover:shadow-lg hover:shadow-black/30 cursor-pointer active:blur-sm ';

    const prevPage = currentPage > 1 ? createPageURL(currentPage - 1) : null;
    const nextPage = totalPages && +currentPage < totalPages ? createPageURL(+currentPage + 1) : null;

    const pages = Array.from({ length: totalPages ?? 0 }, (_, i) => (i + 1))
    const links = pages.map(page => {
        if ((pages.length >= 5) && (page !== 1) && (page !== pages.length) && (page > currentPage - 2 && page < currentPage + 2)
        ) {
            return (<Link href={createPageURL(page)} key={page}>
                <div className={` ${currentPage == page ? 'py-4 px-6 text-blue-400 outline outline-blue-200' : 'bg-white py-3 px-5'} ${buttonStyle}`}>{page}</div>
            </Link>)
        }
        else if ((pages.length < 5) && (page !== 1) && (page !== pages.length))
            return (<Link href={createPageURL(page)} key={page}>
                <div className={` ${currentPage == page ? 'py-4 px-6 text-blue-400  outline outline-blue-200' : 'bg-white py-3 px-5'} ${buttonStyle}`}>{page}</div>
            </Link>)
    })

    return (
        <div className='flex gap-2 items-center justify-center'>
            <div>
                {prevPage ? (
                    <Link href={prevPage}>
                        <div className={buttonStyle}>
                            <ArrowLeftIcon width={20} height={20} color='black' />
                        </div>
                    </Link>
                ) : null}
            </div>
            {totalPages && totalPages > 1 ?
                (<>
                    <Link href={createPageURL(1)}>
                        <div className={`py-3 px-5 ${currentPage == 1 ? 'py-4 px-6 bg-pink-100 text-blue-400  outline outline-blue-200' : 'bg-white py-3 px-5  '} ${buttonStyle}`}>{1}</div>
                    </Link>
                    {currentPage - 2 > 1 ? (<div className={`py-3 px-5 bg-white ${buttonStyle}`}>...</div>) : null}
                    {links.length > 1 ? links.map(link => link) : null}
                    {currentPage + 2 < pages.length ? (<div className={`py-3 px-5 bg-white ${buttonStyle}`}>...</div>) : null}
                    <Link href={createPageURL(pages.length)}>
                        <div className={`py-3 px-5 ${currentPage == pages.length ? 'py-4 px-6 bg-pink-100 text-blue-400 outline outline-blue-200' : 'bg-white py-3 px-5 '} ${buttonStyle}`}>{pages.length}</div>

                    </Link>
                </>) : null}
            <div>
                {nextPage ? (
                    <Link href={nextPage}>
                        <div className={buttonStyle}>
                            <ArrowRightIcon width={20} height={20} color='black' />
                        </div>
                    </Link>
                ) : null}
            </div>
        </div>
    )
}

export default Pagination
