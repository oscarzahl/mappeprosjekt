-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "make" TEXT NOT NULL
);
INSERT INTO "new_Car" ("brand", "description", "id", "image", "make", "model", "name", "price", "year") SELECT "brand", "description", "id", "image", "make", "model", "name", "price", "year" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_key_check("Car");
PRAGMA foreign_keys=ON;
