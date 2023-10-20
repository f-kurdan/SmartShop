import React from 'react'

const items = [
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "display": '6,1" (2556x1179), OLED',
        "chip": 'A17 Pro',
        "capacity": '128GB',
        "price": "204 990 ₽",
        "camera": '48/12/12',
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    },
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "display": '6,1" (2556x1179), OLED',
        "chip": 'A17 Pro',
        "capacity": '128GB',
        "price": "204 990 ₽",
        "camera": '48/12/12',
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    },
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "display": '6,1" (2556x1179), OLED',
        "chip": 'A17 Pro',
        "capacity": '128GB',
        "price": "204 990 ₽",
        "camera": '48/12/12',
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    },
    {
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "display": '6,1" (2556x1179), OLED',
        "chip": 'A17 Pro',
        "capacity": '128GB',
        "price": "204 990 ₽",
        "camera": '48/12/12',
        "photo": "https://static.re-store.ru/upload/resize_cache/iblock/854/100500_800_140cd750bba9870f18aada2478b24840a/8s2om4rct21wlhl30nwpbhcx731mvxup.jpeg",
    }
]

const Phones = () => {
    return (
        <div  className='flex flex-col self-end w-2/3 min-h-fit my-20 mr-8'>
            {items.map((item, index) =>
            (<div key={index} className='flex flex-row justify-between items-start px-10 py-7 bg-white my-0.5 rounded-xl shadow-lg shadow-black/30'>
                <img className='max-w-48 max-h-48' src={item.photo} alt="" />
                <div className='flex flex-col justify-start items-start text-sm px-3'>
                    <p className='mb-5 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>{item.name}</p>
                    <p className='mb-3'>Дисплей: {item.display}</p>
                    <p className='mb-3'>Процессор: {item.chip}</p>
                    <p className='mb-3'>Память: {item.capacity}</p>
                    <p >Основная камера МПикс: {item.camera}</p>
                </div>
                <div className='min-w-fit self-end'>
                    <p className='border-2 border-black border-solid  p-1 '>
                        {item.price}
                    </p>
                    <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>В корзину</p>
                </div>                
            </div>)
            )}

        </div>
    )
}

export default Phones