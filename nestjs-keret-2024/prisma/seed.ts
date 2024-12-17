import { PrismaClient, User, Product } from '@prisma/client';
import { faker, tr } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
  // Delete existing data
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Create sample users
  const users: User[] = [];
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
      },
    });
    users.push(user);
  }

  // Create sample products
  const products: Product[] = [];
  for (let i = 0; i < 20; i++) {
    const product = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        stock: faker.number.int({ min: 1, max: 100 }),
      },
    });
    products.push(product);
  }

  // Create sample carts for random users and products
  for (let i = 0; i < 30; i++) {
    const randomUser =
      users[faker.number.int({ min: 0, max: users.length - 1 })];
    const randomProduct =
      products[faker.number.int({ min: 0, max: products.length - 1 })];
    const randomQuantity = faker.number.int({ min: 1, max: 5 });

    try {
      await prisma.cart.create({
        data: {
          userId: randomUser.id,
          productId: randomProduct.id,
          quantity: randomQuantity,
        },
      });
    } catch {}
  }

  console.log('Seeding completed!');
}

seed()
  .catch((e) => {
    console.error(e);
    //process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
