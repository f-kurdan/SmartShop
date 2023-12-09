import React from 'react'
import ProductSpecificationRow from './product-specification-row'

type ProductSpec = { title: string, description: string, id: number }

const ProductSpecificationAdding = () => {
    const [rows, setRows] = React.useState<ProductSpec[]>([])

    console.log(rows)

    const handleAddRow = () => {
        setRows(rows => [...rows, { "title": "", "description": "", id: Date.now() }])
    }

    const handleDeleteRow = (id: number) => {
        console.log(id)
    setRows(rows.filter(r => r.id!== id))
    }

    return (
        <div className='flex flex-col gap-3 w-11/12 justify-center items-start'>
            <div onClick={handleAddRow} className='p-3 rounded-lg bg-blue-200 cursor-pointer border-2 border-black text-center'>
                Добавить характеристику
            </div>
            {rows.map(r =>
                (<ProductSpecificationRow key={r.id} id={r.id} handleDeleteRow={handleDeleteRow} />)
            )}
        </div>
    )
}

export default ProductSpecificationAdding