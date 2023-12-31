import { PrismaClient } from '@prisma/client';
import convertToSlug from '../src/utils/convertToSlug';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const brandName = 'Apple';
  const images = ['public/phones/iphone15.jpeg']
  // create two dummy articles

  const appleBrand = await prisma.brand.upsert({
    where: { name: 'Apple' },
    update: {},
    create: {
      name: "Apple",
      slug: convertToSlug('Apple'),
    }
  })

  const phonesCategory = await prisma.category.upsert({
    where: { name: 'Смартфоны' },
    update: {},
    create: {
      name: 'Смартфоны',
      slug: convertToSlug('Смартфоны'),
      image: 'public/smartphone.avif'
    },
  })

  const headphonesCategory = await prisma.category.upsert({
    where: { name: 'Наушники' },
    update: {},
    create: {
      name: 'Наушники',
      slug: convertToSlug('Наушники'),
      image: 'public/headphones.jpg'
    },
  })

  const laptopCategory = await prisma.category.upsert({
    where: { name: 'Ноутбуки' },
    update: {},
    create: {
      name: 'Ноутбуки',
      slug: convertToSlug('Ноутбуки'),
      image: 'public/laptop.avif'
    },
  })

  const smartqwatchCategory = await prisma.category.upsert({
    where: { name: 'Смарт-часы' },
    update: {},
    create: {
      name: 'Смарт-часы',
      slug: convertToSlug('Смарт-часы'),
      image: 'public/smartwatch.avif'
    },
  })

  const tabletCategory = await prisma.category.upsert({
    where: { name: 'Планшеты' },
    update: {},
    create: {
      name: 'Планшеты',
      slug: convertToSlug('Планшеты'),
      image: 'public/tablet.avif'
    },
  })

  const camerasCategory = await prisma.category.upsert({
    where: { name: 'Камеры' },
    update: {},
    create: {
      name: 'Камеры',
      slug: convertToSlug('Камеры'),
      image: 'public/camera.avif'
    },
  })

  const product1 = await prisma.product.upsert({
    where: { slug: 'IPhone 15 Pro Max Белый 256' },
    update: {},
    create: {
      name: 'IPhone 15 Pro Max',
      price: 150000,
      slug: convertToSlug('IPhone 15 Pro Max Белый 256'),
      SKU: '10515PROMAXWhite',
      images: images,
      quantity: 10,
      productInfo: {
        create: [
          { name: 'Процессор', description: "Apple A15 Bionic" },
          { name: 'Цвет', description: "Белый"},
          { name: 'Память', description: '256'}

        ],
      },
      category: {
        connect: {
          name: 'Смартфоны',
        }
      },
      brand: {
        connect: {
          name: brandName,
        }
      }
    },
  });

  const product2 = await prisma.product.upsert({
    where: { slug: convertToSlug(`IPhone 15 Pro Max Черный 128гб`) },
    update: {},
    create: {
      name: 'IPhone 15 Pro Max',
      price: 140000,
      SKU: '10515PROMAXBlack',
      images: images,
      slug: convertToSlug('IPhone 15 Pro Max Черный 128гб'),
      quantity: 10,
      productInfo: {
        create: [
          { name: 'Процессор', description: "Apple A15 Bionic" },
          { name: 'Цвет', description: "Черный"},
          { name: 'Память', description: '128'}
        ],
      },
      category: {
        connect: {
          name: 'Смартфоны',
        }
      },
      brand: {
        connect: {
          name: brandName,
          slug: convertToSlug(brandName)
        }
      }
    },
  });
  

  const product3 = await prisma.product.upsert({
    where: { slug: convertToSlug(`IPhone 15 Pro Черный 128гб`) },
    update: {},
    create: {
      name: 'IPhone 15 Pro',
      price: 140000,
      SKU: '10515PROWhite',
      images: images,
      slug: convertToSlug('IPhone 15 Pro Черный 128гб'),
      quantity: 10,
      productInfo: {
        create: [
          { name: 'Процессор', description: "Apple A15 Bionic" },
          { name: 'Цвет', description: "Черный"},
          { name: 'Память', description: '128'}
        ],
      },
      category: {
        connect: {
          name: 'Смартфоны',
        }
      },
      brand: {
        connect: {
          name: brandName,
          slug: convertToSlug(brandName)
        }
      }
    },
  });
  
  const product4 = await prisma.product.upsert({
    where: { slug: convertToSlug(`IPhone 15 Pro Белый 128гб`) },
    update: {},
    create: {
      name: 'IPhone 15 Pro',
      price: 140000,
      SKU: '10515PROBlack',
      images: images,
      slug: convertToSlug('IPhone 15 Pro Белый 128гб'),
      quantity: 10,
      productInfo: {
        create: [
          { name: 'Процессор', description: "Apple A15 Bionic" },
          { name: 'Цвет', description: "Белый"},
          { name: 'Память', description: '128'}
        ],
      },
      category: {
        connect: {
          name: 'Смартфоны',
        }
      },
      brand: {
        connect: {
          name: brandName,
          slug: convertToSlug(brandName)
        }
      }
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: 'fdfd@fdfd.com' },
    update: {},
    create: {
      email: 'fdfd@fdfd.com',
      password: 'msdfokrr',
      username: 'User1',
      role: 'ADMIN',
      phone: 88002235545,
    },
  })

  const user2 = await prisma.user.upsert({
    where: { email: 'wwww@fdfd.com' },
    update: {},
    create: {
      email: 'wwww@fdfd.com',
      password: 'qwruyy',
      username: 'User2',
      phone: 8800223536,
    },
  })

  // console.log({product1, product2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });