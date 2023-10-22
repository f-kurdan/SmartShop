import React from 'react'

const ListContainer = ({children}:{children:JSX.Element}) => {
  return (
    <div className='flex flex-col self-end w-2/3 min-h-fit mr-10'>
      {children}
    </div>
  )
}

export default ListContainer