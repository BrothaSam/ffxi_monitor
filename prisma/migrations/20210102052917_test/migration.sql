/*
  Warnings:

  - Made the column `time` on table `MemoryUsage` required. The migration will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MemoryUsage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "totalMemMb" REAL,
    "usedMemMb" REAL,
    "freeMemMb" REAL,
    "freeMemPercentage" REAL
);
INSERT INTO "new_MemoryUsage" ("id", "time", "totalMemMb", "usedMemMb", "freeMemMb", "freeMemPercentage") SELECT "id", "time", "totalMemMb", "usedMemMb", "freeMemMb", "freeMemPercentage" FROM "MemoryUsage";
DROP TABLE "MemoryUsage";
ALTER TABLE "new_MemoryUsage" RENAME TO "MemoryUsage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
