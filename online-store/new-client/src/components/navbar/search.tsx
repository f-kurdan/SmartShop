import React from 'react'

const Search = () => {
  const placeholder = 'Введите название товара'

 const handleSearch = (value: string) => {
    console.log(value)
 }

  return (
    <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
  )
}

export default Search