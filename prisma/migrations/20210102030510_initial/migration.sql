-- CreateTable
CREATE TABLE "CpuUsage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER,
    "usage" REAL
);

-- CreateTable
CREATE TABLE "MemoryUsage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER,
    "totalTMemMb" REAL,
    "usedMemMb" REAL,
    "freeMemMb" REAL,
    "freeMemPercentage" REAL
);
