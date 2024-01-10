import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'

const ProductImageAdding = () => {
  const [images, setImages] = useState<string[]>([])
  const imageRef = useRef(null)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setImages(files.map(f => f.name));    
    }
  }

  return (
    <>
      <label className='border-2 border-solid rounded-md p-3'>
        Добавить изображения
        <input ref={imageRef} onChange={onInputChange} hidden type="file" multiple name="files[]" />
      </label>
      {images?.length ? (<div className='flex flex-col gap-1 justify-start items-start'>
        {images?.map(i =>
          <span key={i} className='text-lime-500 text-center'>{i}</span>
        )}
      </div>) : null
      }
    </>
  )
}

export default ProductImageAdding