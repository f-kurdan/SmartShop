import React from 'react'

const CategoryUpdateDialog = () => {
  return (
      <form className='flex flex-row gap-4'>
        <label>
          <input type="text" placeholder='Новое название' />
        </label>
        <label>
          Новое изображение
          <input type="file" />
        </label>
      </form>
  )
}

export default CategoryUpdateDialog