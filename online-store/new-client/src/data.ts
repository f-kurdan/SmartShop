export const categories = [
    { id: 1, slug: "phones", name: "ТЕЛЕФОНЫ", src: "phone.png" },
    { id: 2, slug: "headphones", name: "НАУШНИКИ", src: "headphone.png" },
    { id: 3, slug: "tablet", name: "ПЛАНШЕТЫ", src: "tablet.png" },
    { id: 4, slug: "watch", name: "СМАРТ-ЧАСЫ", src: "watch.png" },
    { id: 5, slug: "laptop", name: "НОУТБУКИ", src: "laptop.png" },
    { id: 6, slug: "camera", name: "КАМЕРЫ", src: "camera.png" },
]

export const products = [
    {
        "id": 1,
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "brand_id": 1,
        "price": "204 990 ₽",
        "photo": "/phones/iphone15.jpeg",
        "category_id": 1,
        "characteristics": [
            {name: "display", value : '6,1" (2556x1179), OLED'},
            {name: "chip", value : 'A17 Pro'},
            {name:  "capacity", value : '128GB'},
            {name: "camera", value : '48/12/12'},
        ],
    },
    {
        "id": 2,
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "brand_id": 1,
        "price": "204 990 ₽",
        "photo": "/phones/iphone15.jpeg",
        "category_id": 1,
        "characteristics": [
            {name: "display", value : '6,1" (2556x1179), OLED'},
            {name: "chip", value : 'A17 Pro'},
            {name:  "capacity", value : '128GB'},
            {name: "camera", value : '48/12/12'},
        ],
    },
    {
        "id": 3,
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "brand_id": 1,
        "price": "204 990 ₽",
        "photo": "/phones/iphone15.jpeg",
        "category_id": 1,
        "characteristics": [
            {name: "display", value : '6,1" (2556x1179), OLED'},
            {name: "chip", value : 'A17 Pro'},
            {name:  "capacity", value : '128GB'},
            {name: "camera", value : '48/12/12'},
        ],
    },
    {
        "id": 4,
        "name": "Apple iPhone 15 Pro Max eSIM 256 ГБ, «титановый бежевый»",
        "brand_id": 1,
        "price": "204 990 ₽",
        "photo": "/phones/iphone15.jpeg",
        "category_id": 1,
        "characteristics": [
            {name: "display", value : '6,1" (2556x1179), OLED'},
            {name: "chip", value : 'A17 Pro'},
            {name:  "capacity", value : '128GB'},
            {name: "camera", value : '48/12/12'},
        ],
    },
    {
        "id": 5,
        "name": "Наушники Apple AirPods 2, Bluetooth, вкладыши, белый ",
        "brand_id": 1,
        "price": "12 990 ₽",
        "photo": "/headphones/airpods.webp",
        "category_id": 2,
        "characteristics": [
            {name: "frequency_range", value : 'от 20 Гц до 15 кГц'},
            {name:"connection_type", value : 'беспроводные bluetooth, True Wireless'},
            {name:  "mic", value : 'встроенный'},
            {name: "battery_life", value : '5 ч'},
        ],
    },
    {
        "id": 6,
        "name": "Наушники Apple AirPods 2, Bluetooth, вкладыши, белый ",
        "brand_id": 1,
        "price": "12 990 ₽",
        "photo": "/headphones/airpods.webp",
        "category_id": 2,
        "characteristics": [
            {name: "frequency_range", value : 'от 20 Гц до 15 кГц'},
            {name:"connection_type", value : 'беспроводные bluetooth, True Wireless'},
            {name:  "mic", value : 'встроенный'},
            {name: "battery_life", value : '5 ч'},
        ],
    },
    {
        "id": 7,
        "name": "Наушники Apple AirPods 2, Bluetooth, вкладыши, белый ",
        "brand_id": 1,
        "price": "12 990 ₽",
        "photo": "/headphones/airpods.webp",
        "category_id": 2,
        "characteristics": [
            {name: "frequency_range", value : 'от 20 Гц до 15 кГц'},
            {name:"connection_type", value : 'беспроводные bluetooth, True Wireless'},
            {name:  "mic", value : 'встроенный'},
            {name: "battery_life", value : '5 ч'},
        ],
    },
]

export const brands = [
    { "id": 1, "name": "Apple", "slug": "apple", "logo": "apple.png" },
    { "id": 2, "name": "Samsung", "slug": "samsung", "logo": "samsung.png" },
    { "id": 3, "name": "Huawei", "slug": "huawei", "logo": "huawei.png" },
    { "id": 4, "name": "Xiaomi", "slug": "xiaomi", "logo": "xiaomi.png" },
]


export const variations = [
    {id: 1, category_id: 1, name: "Цвет"},
    { id: 2, category_id: 1, name: "Память"},
    { id: 3, category_id: 1,  name: "Оперативная память"},
    { id: 4, category_id: 1, name: "Процессор"},
    { id: 5, category_id: 1, name: "Камера"},
    {id: 6, category_id: 1, name: "ОС"}, 
    {id: 7, category_id: 2, name : 'Диапазон частот'},
    { id: 8, category_id: 2, name: "Тип подключения" },
    { id: 9, category_id: 2, name: "Микрофон" },
    { id: 10, category_id: 2, name: "Время работы от одного заряда" },
]

export const variation_options= [
    {id: 1, variation_id: 1, name: "черный цвет"},
    {id: 2, variation_id: 1, name: "белые цвет"},
    {id: 3, variation_id: 1, name: "красный цве"},
    {id: 4, variation_id: 2, name: "128Гб"},
    {id: 5, variation_id: 2, name: "256Гб"},
    {id: 6, variation_id: 2, name: "512Гб"},
    {id: 7, variation_id: 3, name: "8Гб"},
    { id: 8, variation_id: 3, name: "12Гб"},
    { id: 9, variation_id: 4, name: "Snapdragon"},
    { id: 10, variation_id: 4, name: "Exynos"},
    { id: 11, variation_id: 5, name: "48Мп"},
    { id: 12, variation_id: 5, name: "12Мп"},
    { id: 13, variation_id: 6, name: "iOS"},
    { id: 14, variation_id: 6, name: "Android"},
    { id: 15, variation_id: 7, name : 'от 20 Гц до 15 кГц'},
    {id: 16, variation_id: 8, name : 'беспроводные bluetooth, True Wireless'},
    { id: 17, variation_id: 9, name : 'встроенный'},
    { id: 18, variation_id: 10, name : '5 ч'},
    { id: 19, variation_id: 10, name : '6 ч'},
]