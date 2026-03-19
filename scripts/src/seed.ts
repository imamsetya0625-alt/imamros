import { db, gamesTable, productsTable } from "@workspace/db";
import { randomUUID } from "crypto";

async function seed() {
  console.log("Seeding database...");

  const games = [
    {
      id: randomUUID(),
      name: "Mobile Legends: Bang Bang",
      slug: "mobile-legends",
      imageUrl: null,
      category: "MOBA",
      isActive: true,
      requiresServerId: true,
      serverLabel: "Zone ID",
      userIdLabel: "User ID",
      sortOrder: 1,
    },
    {
      id: randomUUID(),
      name: "Free Fire",
      slug: "free-fire",
      imageUrl: null,
      category: "Battle Royale",
      isActive: true,
      requiresServerId: false,
      serverLabel: null,
      userIdLabel: "Player ID",
      sortOrder: 2,
    },
    {
      id: randomUUID(),
      name: "PUBG Mobile",
      slug: "pubg-mobile",
      imageUrl: null,
      category: "Battle Royale",
      isActive: true,
      requiresServerId: false,
      serverLabel: null,
      userIdLabel: "Character ID",
      sortOrder: 3,
    },
    {
      id: randomUUID(),
      name: "Genshin Impact",
      slug: "genshin-impact",
      imageUrl: null,
      category: "RPG",
      isActive: true,
      requiresServerId: true,
      serverLabel: "Server",
      userIdLabel: "UID",
      sortOrder: 4,
    },
    {
      id: randomUUID(),
      name: "Valorant",
      slug: "valorant",
      imageUrl: null,
      category: "FPS",
      isActive: true,
      requiresServerId: false,
      serverLabel: null,
      userIdLabel: "Riot ID",
      sortOrder: 5,
    },
    {
      id: randomUUID(),
      name: "Honor of Kings",
      slug: "honor-of-kings",
      imageUrl: null,
      category: "MOBA",
      isActive: true,
      requiresServerId: false,
      serverLabel: null,
      userIdLabel: "User ID",
      sortOrder: 6,
    },
  ];

  for (const game of games) {
    try {
      await db.insert(gamesTable).values(game).onConflictDoNothing();
      console.log(`Inserted game: ${game.name}`);
    } catch (e) {
      console.log(`Skipped game ${game.name}: ${e}`);
    }
  }

  const mlGame = games[0];
  const ffGame = games[1];
  const pubgGame = games[2];
  const genshinGame = games[3];

  const mlProducts = [
    { id: randomUUID(), gameId: mlGame.id, name: "11 Diamonds", amount: 11, unit: "Diamonds", buyPrice: "3000", sellPrice: "4000", sortOrder: 1, supplierCode: "ML_11" },
    { id: randomUUID(), gameId: mlGame.id, name: "56 Diamonds", amount: 56, unit: "Diamonds", buyPrice: "14000", sellPrice: "18000", sortOrder: 2, supplierCode: "ML_56" },
    { id: randomUUID(), gameId: mlGame.id, name: "112 Diamonds", amount: 112, unit: "Diamonds", buyPrice: "27000", sellPrice: "35000", sortOrder: 3, supplierCode: "ML_112" },
    { id: randomUUID(), gameId: mlGame.id, name: "172 Diamonds", amount: 172, unit: "Diamonds", buyPrice: "43000", sellPrice: "52000", sortOrder: 4, supplierCode: "ML_172" },
    { id: randomUUID(), gameId: mlGame.id, name: "257 Diamonds", amount: 257, unit: "Diamonds", buyPrice: "65000", sellPrice: "78000", sortOrder: 5, supplierCode: "ML_257" },
    { id: randomUUID(), gameId: mlGame.id, name: "514 Diamonds", amount: 514, unit: "Diamonds", buyPrice: "130000", sellPrice: "155000", sortOrder: 6, supplierCode: "ML_514" },
    { id: randomUUID(), gameId: mlGame.id, name: "706 Diamonds", amount: 706, unit: "Diamonds", buyPrice: "175000", sellPrice: "210000", sortOrder: 7, supplierCode: "ML_706" },
    { id: randomUUID(), gameId: mlGame.id, name: "1412 Diamonds", amount: 1412, unit: "Diamonds", buyPrice: "350000", sellPrice: "415000", sortOrder: 8, supplierCode: "ML_1412" },
  ];

  const ffProducts = [
    { id: randomUUID(), gameId: ffGame.id, name: "70 Diamonds", amount: 70, unit: "Diamonds", buyPrice: "14000", sellPrice: "18000", sortOrder: 1, supplierCode: "FF_70" },
    { id: randomUUID(), gameId: ffGame.id, name: "140 Diamonds", amount: 140, unit: "Diamonds", buyPrice: "27000", sellPrice: "35000", sortOrder: 2, supplierCode: "FF_140" },
    { id: randomUUID(), gameId: ffGame.id, name: "355 Diamonds", amount: 355, unit: "Diamonds", buyPrice: "68000", sellPrice: "82000", sortOrder: 3, supplierCode: "FF_355" },
    { id: randomUUID(), gameId: ffGame.id, name: "720 Diamonds", amount: 720, unit: "Diamonds", buyPrice: "134000", sellPrice: "160000", sortOrder: 4, supplierCode: "FF_720" },
    { id: randomUUID(), gameId: ffGame.id, name: "1450 Diamonds", amount: 1450, unit: "Diamonds", buyPrice: "268000", sellPrice: "320000", sortOrder: 5, supplierCode: "FF_1450" },
    { id: randomUUID(), gameId: ffGame.id, name: "2180 Diamonds", amount: 2180, unit: "Diamonds", buyPrice: "402000", sellPrice: "480000", sortOrder: 6, supplierCode: "FF_2180" },
  ];

  const pubgProducts = [
    { id: randomUUID(), gameId: pubgGame.id, name: "60 UC", amount: 60, unit: "UC", buyPrice: "14000", sellPrice: "18000", sortOrder: 1, supplierCode: "PUBG_60" },
    { id: randomUUID(), gameId: pubgGame.id, name: "167 UC", amount: 167, unit: "UC", buyPrice: "38000", sellPrice: "48000", sortOrder: 2, supplierCode: "PUBG_167" },
    { id: randomUUID(), gameId: pubgGame.id, name: "325 UC", amount: 325, unit: "UC", buyPrice: "75000", sellPrice: "92000", sortOrder: 3, supplierCode: "PUBG_325" },
    { id: randomUUID(), gameId: pubgGame.id, name: "660 UC", amount: 660, unit: "UC", buyPrice: "150000", sellPrice: "182000", sortOrder: 4, supplierCode: "PUBG_660" },
    { id: randomUUID(), gameId: pubgGame.id, name: "1800 UC", amount: 1800, unit: "UC", buyPrice: "400000", sellPrice: "480000", sortOrder: 5, supplierCode: "PUBG_1800" },
  ];

  const genshinProducts = [
    { id: randomUUID(), gameId: genshinGame.id, name: "60 Genesis Crystals", amount: 60, unit: "Genesis Crystals", buyPrice: "14000", sellPrice: "18000", sortOrder: 1, supplierCode: "GI_60" },
    { id: randomUUID(), gameId: genshinGame.id, name: "300 Genesis Crystals", amount: 300, unit: "Genesis Crystals", buyPrice: "68000", sellPrice: "85000", sortOrder: 2, supplierCode: "GI_300" },
    { id: randomUUID(), gameId: genshinGame.id, name: "980 Genesis Crystals", amount: 980, unit: "Genesis Crystals", buyPrice: "220000", sellPrice: "275000", sortOrder: 3, supplierCode: "GI_980" },
    { id: randomUUID(), gameId: genshinGame.id, name: "1980 Genesis Crystals", amount: 1980, unit: "Genesis Crystals", buyPrice: "440000", sellPrice: "545000", sortOrder: 4, supplierCode: "GI_1980" },
    { id: randomUUID(), gameId: genshinGame.id, name: "3280 Genesis Crystals", amount: 3280, unit: "Genesis Crystals", buyPrice: "720000", sellPrice: "895000", sortOrder: 5, supplierCode: "GI_3280" },
    { id: randomUUID(), gameId: genshinGame.id, name: "6480 Genesis Crystals", amount: 6480, unit: "Genesis Crystals", buyPrice: "1440000", sellPrice: "1780000", sortOrder: 6, supplierCode: "GI_6480" },
  ];

  const allProducts = [...mlProducts, ...ffProducts, ...pubgProducts, ...genshinProducts];

  for (const product of allProducts) {
    try {
      await db.insert(productsTable).values({
        ...product,
        description: null,
        isActive: true,
      }).onConflictDoNothing();
      console.log(`Inserted product: ${product.name}`);
    } catch (e) {
      console.log(`Skipped product ${product.name}: ${e}`);
    }
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
