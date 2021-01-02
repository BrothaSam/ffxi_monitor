/*
  Warnings:

  - You are about to drop the column `totalTMemMb` on the `MemoryUsage` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MemoryUsage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER,
    "totalMemMb" REAL,
    "usedMemMb" REAL,
    "freeMemMb" REAL,
    "freeMemPercentage" REAL
);
INSERT INTO "new_MemoryUsage" ("id", "time", "usedMemMb", "freeMemMb", "freeMemPercentage") SELECT "id", "time", "usedMemMb", "freeMemMb", "freeMemPercentage" FROM "MemoryUsage";
DROP TABLE "MemoryUsage";
ALTER TABLE "new_MemoryUsage" RENAME TO "MemoryUsage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
