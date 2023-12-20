import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

  const category = await prisma.category.upsert({
    where: { id: 1},
    update: {},
    create: {
      name: 'smartphones',
    }
  })

  const brand = await prisma.brand.upsert({
    where: { id: 1},
    update: {},
    create: {
      name: 'Apple',
    }
  })

  const product1 = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'IPhone 15 Pro Max White',
      price: 150000,
      SKU: '10515PROMAXWhite',
      brandId: 1,
      categoryId: 1,
    },
  });

  const product2 = await prisma.product.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'IPhone 15 Pro Max Black',
      price: 140000,
      SKU: '10515PROMAXBlack',
      brandId: 1,
      categoryId: 1,
    },
  });

  console.log({category, brand, product1, product2 });
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