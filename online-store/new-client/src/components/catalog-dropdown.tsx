import React from 'react'

const CatalogDropdown = () => {
    return (
        <div className="group relative inline-block w-fit">
            <button className="dropbtn">Dropdown</button>
            <div className="absolute w-40 bg-white hidden z-10 group-hover:block">
                <a className='block' href="#">Link 1</a>
                <a className='block' href="#">Link 2</a>
                <a className='block' href="#">Link 3</a>
            </div>
        </div>
    )
}

export default CatalogDropdown