import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Début de l'opération de seed...");

  // Suppression de toutes les données existantes
  await prisma.photo.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.user.deleteMany({});

  // Création des événements
  const seedEvents = [
    {
      id: uuid(),
      name: "Festival de Musique",
      desc: "Un grand festival de musique en plein air.",
      picture: "festival.jpg",
      adress: { type: "Point", coordinates: [2.3522, 48.8566] },
      start_at: new Date("2025-06-01"),
      end_at: new Date("2025-06-03"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Conférence Tech",
      desc: "Un rassemblement des passionnés de technologie.",
      picture: "tech.jpg",
      adress: { type: "Point", coordinates: [-74.006, 40.7128] },
      start_at: new Date("2025-07-10"),
      end_at: new Date("2025-07-12"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Exposition d'Art Contemporain",
      desc: "Découvrez les œuvres de grands artistes contemporains.",
      picture: "art.jpg",
      adress: { type: "Point", coordinates: [12.4964, 41.9028] },
      start_at: new Date("2025-05-15"),
      end_at: new Date("2025-05-30"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Marathon de Paris",
      desc: "Le plus grand marathon de France.",
      picture: "marathon.jpg",
      adress: { type: "Point", coordinates: [2.2945, 48.8584] },
      start_at: new Date("2025-04-05"),
      end_at: new Date("2025-04-05"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Salon du Jeu Vidéo",
      desc: "Rencontrez des développeurs et testez les derniers jeux.",
      picture: "gaming.jpg",
      adress: { type: "Point", coordinates: [6.1432, 46.2044] },
      start_at: new Date("2025-09-20"),
      end_at: new Date("2025-09-22"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Festival de Cinéma",
      desc: "Projections et rencontres avec des réalisateurs du monde entier.",
      picture: "cinema.jpg",
      adress: { type: "Point", coordinates: [7.262, 43.7102] },
      start_at: new Date("2025-05-17"),
      end_at: new Date("2025-05-28"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Fête de la Gastronomie",
      desc: "Dégustations et ateliers culinaires avec des chefs étoilés.",
      picture: "food.jpg",
      adress: { type: "Point", coordinates: [4.8357, 45.764] },
      start_at: new Date("2025-10-01"),
      end_at: new Date("2025-10-03"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Salon de l'Agriculture",
      desc: "Découvrez les métiers et produits du monde agricole.",
      picture: "agriculture.jpg",
      adress: { type: "Point", coordinates: [2.2867, 48.8327] },
      start_at: new Date("2025-02-22"),
      end_at: new Date("2025-03-02"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Tournoi de Tennis",
      desc: "Compétition internationale sur terre battue.",
      picture: "tennis.jpg",
      adress: { type: "Point", coordinates: [2.253, 48.8471] },
      start_at: new Date("2025-05-24"),
      end_at: new Date("2025-06-07"),
      created_at: new Date(),
    },
    {
      id: uuid(),
      name: "Concert de Rock",
      desc: "Une soirée avec les plus grandes légendes du rock.",
      picture: "rock.jpg",
      adress: { type: "Point", coordinates: [-0.1278, 51.5074] },
      start_at: new Date("2025-08-15"),
      end_at: new Date("2025-08-15"),
      created_at: new Date(),
    },
  ];

  // Insertion des événements dans la base de données
  const events = await Promise.all(
    seedEvents.map((event) =>
      prisma.event.create({
        data: event,
      }),
    ),
  );

  // Création d'un utilisateur de test
  const user = await prisma.user.create({
    data: {
      id: uuid(),
      name: "Utilisateur Test",
      email: "test@example.com",
      password: "password123", // Dans une application réelle, ce mot de passe devrait être hashé
      created_at: new Date(),
    },
  });

  // Ajout de quelques photos aux événements
  await Promise.all(
    events.slice(0, 5).map((event, index) =>
      prisma.photo.create({
        data: {
          id: uuid(),
          event_id: event.id,
          url: `https://picsum.photos/id/${index + 100}/800/600`,
          uploaded_at: new Date(),
        },
      }),
    ),
  );

  console.log(`✅ Seed terminé : ${events.length} événements créés`);
}

main()
  .catch((e) => {
    console.error("❌ Erreur pendant le seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
