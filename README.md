Интернет магазин SmartShop https://github.com/f-kurdan/online-store
Stack:
Lang: TypeScript
Frontend: React.js и Next.js, а также сопутствующие инструменты, такие как Redux, React Query, React Context и др.
Backend: Nest.js. В качестве БД используется PosgreSQL вместе с ORM Prisma
В проекте реализовано постраничное отображение товаров, поиск, а также фильтрация по категориям, брендам и характеристикам. По каждому продукту можно посмотреть детальную информацию, выбрать одну из конфигураций, и добавить в корзину, изменяя количество добавленных экземпляров - всё из одной страницы.
Маршрутизация реализована таким образом, что информация о контенте страницы (например, выбранная конфигурация товара) указана в адресной строке, что позволяет с легкостью сохранять страницу или делиться ею без потери информации.
Есть корзина с таблицей добавленных товаров и форма для оформления заказа. А также панель администратора, через которую можно добавлять категории, бренды и товары.
Настроена JWT-аутентификация и авторизация.

E-commerce app SmartShop
Stack:
Lang: TypeScript
Frontend: React.js and Next.js, as well as related tools such as Redux, React Query, React Context, and others.
Backend: Nest.js. PosgreSQL is used as the database along with ORM Prisma
The project implements page-by-page display of products, search, as well as filtering by category, brand and characteristics. For each product you can view detailed information, select one of the configurations, and add to cart, changing the number of added instances - all from one page.
Routing is implemented in such a way that all information about the page content (for example, the selected product configuration) is specified in the address bar, which makes it easy to save or share the page without losing information.
There is a shopping cart with a table of added products and a form for placing an order. And also an admin panel through which you can add categories, brands and products.
And of course JWT authentication and authorization.

TO RUN CLIENT: npm run 
TO RUN SERVER: yarn run start
