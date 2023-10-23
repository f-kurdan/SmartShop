import React from 'react'

const CatalogContainer = ({children}:{children: JSX.Element[]}) => {
  return (
    <div className='flex flex-row justify-around items-start mt-16 min-h-screen'>
        {children}
    </div>
  )
}

export default CatalogContainer