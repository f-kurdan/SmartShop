import React from 'react'

const items = [
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "display": '6,1" (2556x1179), OLED',
        "chip": 'A17 Pro',
        "capacity": '128GB',
        "price": "204 990 ₽",
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    },
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "price": "204 990 ₽",
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    },
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "price": "204 990 ₽",
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    },
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "price": "204 990 ₽",
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    }
]

const Phones = () => {
    return (
        <div style={{"fontFamily" : "Montserrat"}} className='flex flex-col w-2/4 min-h-fit mt-20'>
            {items.map((item, index) =>
            (<div key={index} className='flex flex-row  items-start text-center  p-7 bg-white my-1 rounded-xl shadow-lg shadow-black/30'>
                <img className='w-48 h-48' src={item.photo} alt="" />
                <div className='flex flex-col justify-start items-start text-sm px-3'>
                    <p className='mb-5 text-base font-semibold'>{item.name}</p>
                    <p className='mb-2'>Дисплей: {item.display}</p>
                    <p className='mb-2'>Процессор: {item.chip}</p>
                    <p>Память: {item.capacity}</p>
                </div>
                <div  style={{"fontFamily" : "Unbounded"}} className='min-w-fit self-end'>
                    <p className='border-2 border-black border-solid  p-1 '>
                        {item.price}
                    </p>
                    <p className='bg-lime-400 p-1  transition duration-700 hover:shadow-black/40 hover:shadow-md hover:cursor-pointer'>В корзину</p>
                </div>                
            </div>)
            )}

        </div>
    )
}

export default Phones