import React from 'react'

const CatalogContainer = ({children}:{children: JSX.Element[]}) => {
  return (
    <div className='flex flex-row justify-around items-start min-h-full mt-16'>
        {children}
    </div>
  )
}

export default CatalogContainer