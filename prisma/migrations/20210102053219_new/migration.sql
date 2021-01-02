/*
  Warnings:

  - You are about to alter the column `usage` on the `CpuUsage` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `totalMemMb` on the `MemoryUsage` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `usedMemMb` on the `MemoryUsage` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `freeMemMb` on the `MemoryUsage` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `freeMemPercentage` on the `MemoryUsage` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - Made the column `time` on table `CpuUsage` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `usage` on table `CpuUsage` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `totalMemMb` on table `MemoryUsage` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `usedMemMb` on table `MemoryUsage` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `freeMemMb` on table `MemoryUsage` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `freeMemPercentage` on table `MemoryUsage` required. The migration will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CpuUsage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "usage" REAL NOT NULL
);
INSERT INTO "new_CpuUsage" ("id", "time", "usage") SELECT "id", "time", "usage" FROM "CpuUsage";
DROP TABLE "CpuUsage";
ALTER TABLE "new_CpuUsage" RENAME TO "CpuUsage";
CREATE TABLE "new_MemoryUsage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "totalMemMb" REAL NOT NULL,
    "usedMemMb" REAL NOT NULL,
    "freeMemMb" REAL NOT NULL,
    "freeMemPercentage" REAL NOT NULL
);
INSERT INTO "new_MemoryUsage" ("id", "time", "totalMemMb", "usedMemMb", "freeMemMb", "freeMemPercentage") SELECT "id", "time", "totalMemMb", "usedMemMb", "freeMemMb", "freeMemPercentage" FROM "MemoryUsage";
DROP TABLE "MemoryUsage";
ALTER TABLE "new_MemoryUsage" RENAME TO "MemoryUsage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
