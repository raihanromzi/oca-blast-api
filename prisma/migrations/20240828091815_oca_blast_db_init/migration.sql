/*
  Warnings:

  - You are about to drop the column `emailOpenedAt` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `waReadAt` on the `Recipient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipient" DROP COLUMN "emailOpenedAt",
DROP COLUMN "waReadAt",
ADD COLUMN     "email1BlastOpened" BOOLEAN,
ADD COLUMN     "email2BlastOpened" BOOLEAN,
ADD COLUMN     "waRead" BOOLEAN;
