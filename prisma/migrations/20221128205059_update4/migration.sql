/*
  Warnings:

  - Made the column `itemId` on table `Order_Items` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Order_Items" DROP CONSTRAINT "Order_Items_itemId_fkey";

-- AlterTable
ALTER TABLE "Order_Items" ALTER COLUMN "itemId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_Items" ADD CONSTRAINT "Order_Items_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
