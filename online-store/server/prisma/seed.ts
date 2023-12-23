import { PrismaClient } from '@prisma/client';
import convertToSlug from '../src/utils/convertToSlug';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const smartphonesCategory = 'Smartphones';
  const brandName = 'Apple';
  const phoneName = 'IPhone 15 Pro Max';
  const images = ['public/phones/samsung_galaxy_s23_black/main.png',
'public/phones/samsung_galaxy_s23_black/main.png']
  // create two dummy articles


  const product1 = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'IPhone 15 Pro Max White',
      price: 150000,
      slug: convertToSlug('IPhone 15 Pro Max White'),
      SKU: '10515PROMAXWhite',
      images: images,
      quantity: 10,
      productInfo: {
        create: [
          { name: 'CPU', description: "Apple A15 Bionic" },
        ],
      },
      category: {
        create: {
          name: smartphonesCategory,
          slug:  convertToSlug(smartphonesCategory)        
        }
      },
      brand: {
        create: {
          name: brandName,
          slug: convertToSlug(brandName)
        }
      }
    },
  });

  const product2 = await prisma.product.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'IPhone 15 Pro Max Black',
      price: 140000,
      SKU: '10515PROMAXBlack',
      images: images,
      slug: convertToSlug('IPhone 15 Pro Max Black'),
      quantity: 10,
      productInfo: {
        create: [
          { name: 'CPU', description: "Apple A15 Bionic" },
        ],
      },
      category: {
        connect: {
          name: smartphonesCategory,
          slug:  convertToSlug(smartphonesCategory)        
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