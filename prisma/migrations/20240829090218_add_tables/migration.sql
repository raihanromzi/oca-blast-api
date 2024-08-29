/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `email1BlastOpened` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `email2BlastOpened` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `waRead` on the `Recipient` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('EMAIL_SENT', 'EMAIL_OPENED', 'EMAIL_CLICKED', 'WHATSAPP_SENT', 'WHATSAPP_READ');

-- CreateEnum
CREATE TYPE "SentType" AS ENUM ('EMAIL', 'WHATSAPP');

-- AlterTable
ALTER TABLE "Recipient" DROP COLUMN "createdAt",
DROP COLUMN "email1BlastOpened",
DROP COLUMN "email2BlastOpened",
DROP COLUMN "updatedAt",
DROP COLUMN "waRead";

-- CreateTable
CREATE TABLE "ReceiveLogs" (
    "id" SERIAL NOT NULL,
    "recipientId" INTEGER NOT NULL,
    "logType" "LogType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReceiveLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SentLog" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "sentType" "SentType" NOT NULL,
    "templateMessage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SentLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReceiveLogs" ADD CONSTRAINT "ReceiveLogs_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Recipient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SentLog" ADD CONSTRAINT "SentLog_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
