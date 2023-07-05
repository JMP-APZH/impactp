-- CreateTable
CREATE TABLE "Dairy" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prix" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "prixspecial" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "quantite" TEXT NOT NULL,
    "quantite2" TEXT NOT NULL,
    "prixunite" TEXT NOT NULL,
    "nutriscore" TEXT NOT NULL,
    "nutrifull" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dairy_pkey" PRIMARY KEY ("id")
);
