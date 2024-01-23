import React from 'react'
import SaveButton from '../../dialogs/save-button'

const CategoryUpdateForm = ({ defaultName }: { defaultName: string }) => {
  return (
    <form className='flex flex-row justify-start items-center gap-5 border-2 border-gray-400 p-3 h-[100px] rounded-md'>
      <label >
        <input
          type="text"
          defaultValue={defaultName}
          placeholder='Новое название'
          className='bg-white rounded-lg p-4 text-gray-500' />
      </label>
      <label className='border rounded-lg p-4 bg-white '>
        Новое изображение
        <input
          hidden
          type="file" />
      </label>
      <div>
      <SaveButton />
      </div>
    </form>
  )
}

export default CategoryUpdateForm