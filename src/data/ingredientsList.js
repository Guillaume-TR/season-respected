const ingredientsList = [
  {
    id: 20,
    name: "Abricot",
    months: [5, 6, 7]
  },
  {
    id: 21,
    name: "Ail",
    months: [0, 1, 2, 3, 8, 9, 10, 11]
  },
  {
    id: 22,
    name: "Ananas",
    months: [0, 1, 10, 11]
  },
  {
    id: 23,
    name: "Artichaut",
    months: [6, 7, 8, 9]
  },
  {
    id: 24,
    name: "Asperge",
    months: [3, 4, 5]
  },
  {
    id: 25,
    name: "Aubergine",
    months: [5, 6, 7, 8, 9]
  },
  {
    id: 26,
    name: "Avocat",
    months: [0, 1, 2, 3, 4, 9, 10, 11]
  },
  {
    id: 27,
    name: "Banane",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 28,
    name: "Betterave",
    months: [4, 5, 6, 7, 8, 9]
  },
  {
    id: 29,
    name: "Blette",
    months: [4, 5, 6, 7, 8, 9]
  },
  {
    id: 30,
    name: "Brocoli",
    months: [5, 6, 7, 8, 9, 10]
  },
  {
    id: 31,
    name: "Câpre",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 32,
    name: "Carotte",
    months: [0, 1, 2, 9, 10, 11]
  },
  {
    id: 33,
    name: "Cassis",
    months: [6, 7]
  },
  {
    id: 34,
    name: "Céleri",
    months: [0, 1, 2, 3, 4, 5, 9, 10, 11]
  },
  {
    id: 35,
    name: "Cerise",
    months: [4, 5, 6]
  },
  {
    id: 36,
    name: "Chou",
    months: [0, 1, 2, 3, 8, 9, 10, 11]
  },
  {
    id: 37,
    name: "Chou blanc",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 38,
    name: "Chou chinois",
    months: [0, 1, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 39,
    name: "Chou de Bruxelles",
    months: [0, 1, 2, 8, 9, 10, 11]
  },
  {
    id: 40,
    name: "Chou frisé",
    months: [0, 1, 8, 9, 10, 11]
  },
  {
    id: 41,
    name: "Chou rave",
    months: [4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 42,
    name: "Chou romanesco",
    months: [4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 43,
    name: "Chou rouge",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 44,
    name: "Citron jaune",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 45,
    name: "Citron vert",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 46,
    name: "Citrouille",
    months: [0, 1, 8, 9, 10, 11]
  },
  {
    id: 47,
    name: "Clémentine",
    months: [0, 1, 10, 11]
  },
  {
    id: 48,
    name: "Concombre",
    months: [4, 5, 6, 7, 8, 9]
  },
  {
    id: 49,
    name: "Courge",
    months: [0, 7, 8, 9, 10, 11]
  },
  {
    id: 50,
    name: "Courgette",
    months: [4, 5, 6, 7, 8, 9]
  },
  {
    id: 51,
    name: "Cresson",
    months: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 52,
    name: "Crosne",
    months: [0, 1, 2, 10, 11]
  },
  {
    id: 53,
    name: "Echalote",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 54,
    name: "Endive",
    months: [0, 1, 2, 3, 10, 11]
  },
  {
    id: 55,
    name: "Épinard",
    months: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 56,
    name: "Fenouil",
    months: [5, 6, 7, 8, 9, 10]
  },
  {
    id: 57,
    name: "Figue",
    months: [5, 6, 7, 8]
  },
  {
    id: 58,
    name: "Fraise",
    months: [3, 4, 5, 6, 7, 8]
  },
  {
    id: 59,
    name: "Fraise des bois",
    months: [7]
  },
  {
    id: 60,
    name: "Framboise",
    months: [5, 6, 7, 8]
  },
  {
    id: 61,
    name: "Frisée",
    months: [0, 1, 2, 3, 7, 8, 9, 10, 11]
  },
  {
    id: 62,
    name: "Fruit de la passion",
    months: [0, 1, 2, 3, 9, 10,11]
  },
  {
    id: 63,
    name: "Grenade",
    months: [8, 9, 10]
  },
  {
    id: 64,
    name: "Groseille",
    months: [5, 6, 7]
  },
  {
    id: 65,
    name: "Haricot vert",
    months: [4, 5, 6, 7, 8]
  },
  {
    id: 66,
    name: "Kaki",
    months: [0, 9, 10, 11]
  },
  {
    id: 67,
    name: "Kiwi",
    months: [0, 1, 2, 3, 8, 9, 10, 11]
  },
  {
    id: 68,
    name: "Kumquat",
    months: [0, 1, 2, 10, 11]
  },
  {
    id: 69,
    name: "Laitue",
    months: [3, 4, 5, 6, 7, 8]
  },
  {
    id: 70,
    name: "Litchi",
    months: [0, 10, 11]
  },
  {
    id: 71,
    name: "Mâche",
    months: [0, 1, 2, 3, 9, 10, 11]
  },
  {
    id: 72,
    name: "Maïs",
    months: [6, 7, 8, 9]
  },
  {
    id: 73,
    name: "Mandarine",
    months: [0, 1, 2, 11]
  },
  {
    id: 74,
    name: "Mangue",
    months: [0, 1, 11]
  },
  {
    id: 75,
    name: "Melon",
    months: [6, 7, 8]
  },
  {
    id: 76,
    name: "Mirabelle",
    months: [7, 8]
  },
  {
    id: 77,
    name: "Mûre",
    months: [6, 7, 8]
  },
  {
    id: 78,
    name: "Myrtille",
    months: [6, 7, 8]
  },
  {
    id: 79,
    name: "Navet",
    months: [2, 3, 4, 5]
  },
  {
    id: 80,
    name: "Nectarine",
    months: [5, 6, 7, 8]
  },
  {
    id: 81,
    name: "Oignon",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 82,
    name: "Olive",
    months: [0, 1, 8, 9, 10, 11]
  },
  {
    id: 83,
    name: "Orange",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 84,
    name: "Pamplemousse",
    months: [0, 1, 2, 3, 4, 5, 6, 9, 10, 11]
  },
  {
    id: 85,
    name: "Panais",
    months: [0, 1, 2, 9, 10, 11]
  },
  {
    id: 86,
    name: "Papaye",
    months: [9, 10 ,11]
  },
  {
    id: 87,
    name: "Pastèque",
    months: [5, 6, 7]
  },
  {
    id: 88,
    name: "Patate douce",
    months: [0, 1, 2, 9, 10, 11]
  },
  {
    id: 89,
    name: "Pêche",
    months: [5, 6, 7, 8]
  },
  {
    id: 90,
    name: "Petit pois",
    months: [4, 5, 6]
  },
  {
    id: 91,
    name: "Piment",
    months: [6, 7, 8, 9]
  },
  {
    id: 92,
    name: "Poire",
    months: [0, 1, 2, 3, 8, 9, 10, 11]
  },
  {
    id: 93,
    name: "Poireau",
    months: [0, 1, 2, 8, 9, 10, 11]
  },
  {
    id: 94,
    name: "Pois chiche",
    months: [4, 5, 6]
  },
  {
    id: 95,
    name: "Poivron",
    months: [5, 6, 7]
  },
  {
    id: 96,
    name: "Pomme",
    months: [0, 1, 2, 3, 8, 9, 10 ,11]
  },
  {
    id: 97,
    name: "Pomme de terre",
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 98,
    name: "Potimarron",
    months: [8, 9, 10, 11]
  },
  {
    id: 99,
    name: "Potiron",
    months: [8, 9, 10, 11]
  },
  {
    id: 100,
    name: "Prune",
    months: [7, 8, 9]
  },
  {
    id: 101,
    name: "Prunelles",
    months: [10, 11]
  },
  {
    id: 102,
    name: "Radis",
    months: [2, 3, 4, 5]
  },
  {
    id: 103,
    name: "Raisin",
    months: [7, 8, 9, 10]
  },
  {
    id: 104,
    name: "Rhubarbe",
    months: [4, 5]
  },
  {
    id: 105,
    name: "Rutabaga",
    months: [0, 1, 9, 10, 11]
  },
  {
    id: 106,
    name: "Salsifi",
    months: [0, 1, 9, 10, 11]
  },
  {
    id: 107,
    name: "Tomate",
    months: [5, 6, 7, 8]
  },
  {
    id: 108,
    name: "Topinambour",
    months: [0, 1, 2, 9, 10, 11]
  }
];

export default ingredientsList;
