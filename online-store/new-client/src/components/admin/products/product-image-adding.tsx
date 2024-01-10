import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'

const ProductImageAdding = () => {
  const [images, setImages] = useState([''])
  const imageRef = useRef(null)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImages([...images, e.target.value])
  }

  const onCancelClick = (image: string) => {
    setImages(images.filter(i => i !== image))
  }

  return (
    <>
    <div ></div>
      <label className='border-2 border-solid rounded-md p-3'>
        Добавить изображения
        <input ref={imageRef} onChange={onInputChange} hidden type="file" multiple name="files[]" />
      </label>
      {images.length ? images.map(i =>
      <div className='flex flex-row gap-2 justify-between items-center'>
        <span key={i} className='text-lime-500 text-center'>{i}</span>
        <span onClick={() => onCancelClick(i) }>x</span>
      </div>
      ) : null}
    </>
  )
}

export default ProductImageAdding