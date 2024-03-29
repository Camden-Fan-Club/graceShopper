const items = [
  {
    name: "Red Exterior Paint",
    description:
      "1 gallon. Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 10,
    isFeatured: true,
    onSale: true,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266424/graceshopper/istockphoto-123493123-612x612_uqum79.jpg",
    categoryId: 1,
  },
  {
    name: "Blue Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 16,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265799/graceshopper/istockphoto-1200179597-612x612_pwibrs.jpg",
    categoryId: 1,
  },

  {
    name: "Green Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 23,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266496/graceshopper/istockphoto-623067304-612x612_ckpyhh.jpg",
    categoryId: 1,
  },

  {
    name: "Yellow Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 13,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265826/graceshopper/istockphoto-1333355156-612x612_egjwhk.jpg",
    categoryId: 1,
  },

  {
    name: "Orange Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 26,
    isFeatured: true,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265935/graceshopper/istockphoto-182475047-612x612_kjucxn.jpg",
    categoryId: 1,
  },

  {
    name: "White Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 9,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266131/graceshopper/download_h04mam.png",
    categoryId: 1,
  },

  {
    name: "Black Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 11,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266568/graceshopper/download_ctrxy6.png",
    categoryId: 1,
  },

  {
    name: "Brown Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 14,
    isFeatured: true,
    onSale: true,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266094/graceshopper/istockphoto-514738978-612x612_pkqob0.jpg",
    categoryId: 1,
  },

  {
    name: "Pink Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 27,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266121/graceshopper/istockphoto-108537899-612x612_e1mu5m.jpg",
    categoryId: 1,
  },

  {
    name: "Purple Exterior Paint",
    description:
      "1 gallon.  Advanced all-weather protection shields painted surface from harsh weather conditions.  Resilient, 100% acrylic formula provides extra protection from cracking, peeling and blistering",
    price: 62,
    stockQty: 17,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265997/graceshopper/istockphoto-638005480-612x612_n0gyh4.jpg",
    categoryId: 1,
  },
  {
    name: "Red Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 10,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266424/graceshopper/istockphoto-123493123-612x612_uqum79.jpg",
    categoryId: 2,
  },
  {
    name: "Blue Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 16,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265799/graceshopper/istockphoto-1200179597-612x612_pwibrs.jpg",
    categoryId: 2,
  },

  {
    name: "Green Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 23,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266496/graceshopper/istockphoto-623067304-612x612_ckpyhh.jpg",
    categoryId: 2,
  },

  {
    name: "Yellow Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 13,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265826/graceshopper/istockphoto-1333355156-612x612_egjwhk.jpg",
    categoryId: 2,
  },

  {
    name: "Orange Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 26,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265935/graceshopper/istockphoto-182475047-612x612_kjucxn.jpg",
    categoryId: 2,
  },

  {
    name: "White Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 9,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266131/graceshopper/download_h04mam.png",
    categoryId: 2,
  },

  {
    name: "Black Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 11,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266568/graceshopper/download_ctrxy6.png",
    categoryId: 2,
  },

  {
    name: "Brown Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 14,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266094/graceshopper/istockphoto-514738978-612x612_pkqob0.jpg",
    categoryId: 2,
  },

  {
    name: "Pink Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 65,
    stockQty: 27,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266121/graceshopper/istockphoto-108537899-612x612_e1mu5m.jpg",
    categoryId: 2,
  },

  {
    name: "Purple Interior Paint",
    description:
      "1 gallon.  0 VOC, low odor paint with primer. Repels stains, resists scuff marks and scratches.",
    price: 60,
    stockQty: 17,
    isFeatured: true,
    onSale: true,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265997/graceshopper/istockphoto-638005480-612x612_n0gyh4.jpg",
    categoryId: 2,
  },
  {
    name: "2-in Angled Brush",
    description: "Handheld 2 inch brush with angled bristles. Perfect for trim",
    price: 25,
    stockQty: 70,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265776/graceshopper/download_ck4bcc.png",
    categoryId: 3,
  },
  {
    name: "2in. Polyester Angle Paint Brush (Sash Brush)",
    description:
      "For use in smaller spaces.  Produces smoother finish with reduced brush marks.",
    price: 8,
    stockQty: 70,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670363094/graceshopper/15054817_cixrcx.webp",
    categoryId: 3,
  },
  {
    name: "3in. Natural Bristle Flat Paint Brush (Chip Brush)",
    description: "Used for trim work.",
    price: 2,
    stockQty: 70,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670363378/graceshopper/04230849_karq4f.webp",
    categoryId: 3,
  },
  {
    name: "8.5in Oval Paint Brush (Faux Finish Brush)",
    description: "Brush can be hand held or pole mounted.",
    price: 10,
    stockQty: 70,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670363657/graceshopper/07947285_vxg8y9.webp",
    categoryId: 3,
  },
  {
    name: "Foam Brush",
    description: "2in. Foam Flat Paint Brush for general purposes.",
    price: 25,
    stockQty: 50,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670265867/graceshopper/download_f5wako.png",
    categoryId: 3,
  },
  {
    name: "Valspar Roller",
    description:
      "3 piece roller kit includes 4in roller, mini roller and plastic paint tray.",
    price: 12,
    stockQty: 50,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670277200/graceshopper/00553726_myp46t.webp",
    categoryId: 4,
  },
  {
    name: "8-Piece Microfiber Paint Roller Kit",
    description:
      "8-piece kits includes 1 brush, 2 roller covers, wire frame, mini roller with cover, paint tray, and tray liner.",
    price: 19,
    stockQty: 40,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670364427/graceshopper/15725907_o4cy78.webp",
    categoryId: 4,
  },

  {
    name: "Wooster Roller",
    description:
      "4-1/2in. x 3/8in. Pro Surpass Shed-Resistant Knit Cage Frame Minit Roller Assembly.",
    price: 8,
    stockQty: 46,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266049/graceshopper/download_ljdxjn.png",
    categoryId: 4,
  },
  {
    name: "PaintStick EZ Roller Inner-Fed Paint Roller",
    description:
      "Extended reach reduces the need for ladders to paint tall walls and ceilings with ease.",
    price: 35,
    stockQty: 40,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670364256/graceshopper/44394292_e6q1xv.webp",
    categoryId: 4,
  },

  {
    name: "Scotch Painter's tape",
    description: "1.88inx60yd in Blue for multi-surface. ",
    price: 10,
    stockQty: 100,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266041/graceshopper/download_i4hmrq.png",
    categoryId: 5,
  },
  {
    name: "Frog Tape",
    description: "1.88inx60yd. Green for multi-surface. ",
    price: 10,
    stockQty: 100,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670266031/graceshopper/download_hqkugl.png",
    categoryId: 5,
  },

  {
    name: "Scotch Exterior Surface Tape",
    description: "1.41inx45yd. Weatherproof for exterior surfaces. ",
    price: 10,
    stockQty: 100,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670274358/graceshopper/14542529_g5mcty.webp",
    categoryId: 5,
  },

  {
    name: "Scotch Extra Strength Rough Surface Tape",
    description:
      "1.41inx60yd. For use on stucco, brick, rough wood and other rough surfaces. ",
    price: 10,
    stockQty: 100,
    isFeatured: false,
    onSale: false,
    imageUrl:
      "https://res.cloudinary.com/dr0oxkbju/image/upload/v1670274508/graceshopper/14432501_clrarb.webp",
    categoryId: 5,
  },
];

const categories = [
  {
    name: "Outdoor Paints",
  },
  {
    name: "Indoor  Paints",
  },
  {
    name: "Brushes",
  },
  {
    name: "Rollers",
  },
  {
    name: "Tape and Accessories",
  },
];

const users = [
  {
    username: "swaglord",
    email: "swaglord@gmail.com",
    password: "12345",
    is_admin: false,
  },
  {
    username: "epicgamer",
    email: "epicgamer@gmail.com",
    password: "12345",
    is_admin: false,
  },
  {
    username: "xxXQu1kSc0peZXxx",
    email: "quickscopez@gmail.com",
    password: "12345",
    is_admin: false,
  },
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "12345",
    is_admin: true,
  },
];

const reviews = [
  {
    title: "Great  Paint",
    stars: 5,
    content: "best paint ever",
    userId: 1,
  },
  {
    title: "Terrible Paint",
    stars: 1,
    content:
      "I’ve been painting for 30 years and this is the worst paint I have ever used",
    userId: 3,
  },
  {
    title: "Great Brush",
    stars: 5,
    content:
      "The  hand feel of this brush is amazing. It reminds me of my  childhood painting with my father. Painting with this brush allowed me to transcend to a higher plane of existence.",
    userId: 2,
  },
];

const item_reviews = [
  {
    itemId: 3,
    reviewId: 2,
  },
  {
    itemId: 7,
    reviewId: 1,
  },
  {
    itemId: 11,
    reviewId: 3,
  },
];

const orders = [{ userId: 4, status: "pending", is_cart: true }];

const order_items = [
  {
    orderId: 1,
    itemId: 1,
    quantity: 3,
  },
  {
    orderId: 1,
    itemId: 4,
    quantity: 3,
  },
];
module.exports = {
  items,
  categories,
  users,
  reviews,
  item_reviews,
  orders,
  order_items,
};
