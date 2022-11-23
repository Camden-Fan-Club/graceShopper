-- DropForeignKey
ALTER TABLE "Item_Reviews" DROP CONSTRAINT "Item_Reviews_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Item_Reviews" DROP CONSTRAINT "Item_Reviews_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "Order_Items" DROP CONSTRAINT "Order_Items_itemId_fkey";

-- AlterTable
ALTER TABLE "Item_Reviews" ALTER COLUMN "itemId" DROP NOT NULL,
ALTER COLUMN "reviewId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Order_Items" ALTER COLUMN "itemId" DROP NOT NULL,
ALTER COLUMN "quantity" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_Items" ADD CONSTRAINT "Order_Items_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Reviews" ADD CONSTRAINT "Item_Reviews_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Reviews" ADD CONSTRAINT "Item_Reviews_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Reviews"("id") ON DELETE SET NULL ON UPDATE CASCADE;
