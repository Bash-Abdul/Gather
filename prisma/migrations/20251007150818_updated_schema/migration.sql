/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventInterest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_hostId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventInterest" DROP CONSTRAINT "EventInterest_eventId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventInterest" DROP CONSTRAINT "EventInterest_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventTag" DROP CONSTRAINT "EventTag_eventId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventTag" DROP CONSTRAINT "EventTag_interestId_fkey";

-- DropIndex
DROP INDEX "public"."User_latitude_longitude_idx";

-- DropIndex
DROP INDEX "public"."UserInterest_interestId_userId_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedAt",
DROP COLUMN "passwordHash",
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Event";

-- DropTable
DROP TABLE "public"."EventInterest";

-- DropTable
DROP TABLE "public"."EventTag";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
