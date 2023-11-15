import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    return (
        <div>

        </div>
    )
}

export default Pagination