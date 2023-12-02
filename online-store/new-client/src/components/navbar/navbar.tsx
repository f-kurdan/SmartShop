import React from 'react';
import CatalogDropdown from './catalog-dropdown';
import Search from './search';
import MainPageLink from './main-page-link';
import RightSideButtons from './right-side-buttons';

const Navbar = () => {
    return (
        <div className="sticky top-0 flex flex-row gap-2 justify-center items-center border-solid w-full h-14 bg-white z-10 shadow-sm px-5">
            <MainPageLink />
            <div className='flex justify-center gap-6 w-3/6'>
                <CatalogDropdown />
                <Search />
            </div>
            <RightSideButtons />
        </div>
    )
}

export default Navbar;