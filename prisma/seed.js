const prisma = require("./prisma");

const {
  items,
  categories,
  users,
  reviews,
  item_reviews,
  orders,
  order_items,
} = require("./seedData");

const seedDb = async () => {
  console.log("creating categories...");
  await Promise.all(
    categories.map(async (category) => {
      return prisma.categories.create({
        data: category,
      });
    })
  );

  console.log("creating items...");

  await Promise.all(
    items.map(async (item) => {
      return prisma.items.create({
        data: item,
      });
    })
  );

  console.log("creating users...");
  await Promise.all(
    users.map(async (user) => {
      return prisma.users.create({
        data: user,
      });
    })
  );

  console.log("creating reviews...");
  await Promise.all(
    reviews.map(async (review) => {
      return prisma.reviews.create({
        data: review,
      });
    })
  );

  console.log("creating item_reviews...");

  await Promise.all(
    item_reviews.map(async (item_review) => {
      console.log("item review", item_review);
      return prisma.item_reviews.create({
        data: item_review,
      });
    })
  );

  console.log("creating orders...");
  await Promise.all(
    orders.map(async (order) => {
      return prisma.orders.create({
        data: order,
      });
    })
  );

  console.log("creating order_items...");
  await Promise.all(
    order_items.map(async (order_item) => {
      return prisma.order_items.create({
        data: order_item,
      });
    })
  );
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
