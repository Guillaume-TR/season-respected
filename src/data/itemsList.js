const itemsList = [
    {
        name: "Abricot",
        months: [5, 6, 7]
    },
    {
        name: "Ail",
        months: [0, 1, 2, 3, 8, 9, 10, 11]
    },
    {
        name: "Ananas",
        months: [0, 1, 10, 11]
    },
    {
        name: "Artichaut",
        months: [6, 7, 8, 9]
    },
    {
        name: "Asperge",
        months: [3, 4, 5]
    },
    {
        name: "Aubergine",
        months: [5, 6, 7, 8, 9]
    },
    {
        name: "Avocat",
        months: [0, 1, 2, 3, 4, 9, 10, 11]
    },
    {
        name: "Banane",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Betterave",
        months: [4, 5, 6, 7, 8, 9]
    },
    {
        name: "Blette",
        months: [4, 5, 6, 7, 8, 9]
    },
    {
        name: "Brocoli",
        months: [5, 6, 7, 8, 9, 10]
    },
    {
        name: "Câpre",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Carotte",
        months: [0, 1, 2, 9, 10, 11]
    },
    {
        name: "Cassis",
        months: [6, 7]
    },
    {
        name: "Céleri",
        months: [0, 1, 2, 3, 4, 5, 9, 10, 11]
    },
    {
        name: "Cerise",
        months: [4, 5, 6]
    },
    {
        name: "Chou",
        months: [0, 1, 2, 3, 8, 9, 10, 11]
    },
    {
        name: "Chou blanc",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Chou chinois",
        months: [0, 1, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Chou de Bruxelles",
        months: [0, 1, 2, 8, 9, 10, 11]
    },
    {
        name: "Chou frisé",
        months: [0, 1, 8, 9, 10, 11]
    },
    {
        name: "Chou rave",
        months: [4, 5, 6, 7, 8, 9, 10]
    },
    {
        name: "Chou romanesco",
        months: [4, 5, 6, 7, 8, 9, 10]
    },
    {
        name: "Chou rouge",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Citron jaune",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Citron vert",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Citrouille",
        months: [0, 1, 8, 9, 10, 11]
    },
    {
        name: "Clémentine",
        months: [0, 1, 10, 11]
    },
    {
        name: "Concombre",
        months: [4, 5, 6, 7, 8, 9]
    },
    {
        name: "Courge",
        months: [0, 7, 8, 9, 10, 11]
    },
    {
        name: "Courgette",
        months: [4, 5, 6, 7, 8, 9]
    },
    {
        name: "Cresson",
        months: [2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        name: "Crosne",
        months: [0, 1, 2, 10, 11]
    },
    {
        name: "Echalote",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Endive",
        months: [0, 1, 2, 3, 10, 11]
    },
    {
        name: "Épinard",
        months: [2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        name: "Fenouil",
        months: [5, 6, 7, 8, 9, 10]
    },
    {
        name: "Figue",
        months: [5, 6, 7, 8]
    },
    {
        name: "Fraise",
        months: [3, 4, 5, 6, 7, 8]
    },
    {
        name: "Fraise des bois",
        months: [7]
    },
    {
        name: "Framboise",
        months: [5, 6, 7, 8]
    },
    {
        name: "Frisée",
        months: [0, 1, 2, 3, 7, 8, 9, 10, 11]
    },
    {
        name: "Fruit de la passion",
        months: [0, 1, 2, 3, 9, 10,11]
    },
    {
        name: "Grenade",
        months: [8, 9, 10]
    },
    {
        name: "Groseille",
        months: [5, 6, 7]
    },
    {
        name: "Haricot vert",
        months: [4, 5, 6, 7, 8]
    },
    {
        name: "Kaki",
        months: [0, 9, 10, 11]
    },
    {
        name: "Kiwi",
        months: [0, 1, 2, 3, 8, 9, 10, 11]
    },
    {
        name: "Kumquat",
        months: [0, 1, 2, 10, 11]
    },
    {
        name: "Laitue",
        months: [3, 4, 5, 6, 7, 8]
    },
    {
        name: "Litchi",
        months: [0, 10, 11]
    },
    {
        name: "Mâche",
        months: [0, 1, 2, 3, 9, 10, 11]
    },
    {
        name: "Maïs",
        months: [6, 7, 8, 9]
    },
    {
        name: "Mandarine",
        months: [0, 1, 2, 11]
    },
    {
        name: "Mangue",
        months: [0, 1, 11]
    },
    {
        name: "Melon",
        months: [6, 7, 8]
    },
    {
        name: "Mirabelle",
        months: [7, 8]
    },
    {
        name: "Mûre",
        months: [6, 7, 8]
    },
    {
        name: "Myrtille",
        months: [6, 7, 8]
    },
    {
        name: "Navet",
        months: [2, 3, 4, 5]
    },
    {
        name: "Nectarine",
        months: [5, 6, 7, 8]
    },
    {
        name: "Oignon",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Olive",
        months: [0, 1, 8, 9, 10, 11]
    },
    {
        name: "Orange",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Pamplemousse",
        months: [0, 1, 2, 3, 4, 5, 6, 9, 10, 11]
    },
    {
        name: "Panais",
        months: [0, 1, 2, 9, 10, 11]
    },
    {
        name: "Papaye",
        months: [9, 10 ,11]
    },
    {
        name: "Pastèque",
        months: [5, 6, 7]
    },
    {
        name: "Patate douce",
        months: [0, 1, 2, 9, 10, 11]
    },
    {
        name: "Pêche",
        months: [5, 6, 7, 8]
    },
    {
        name: "Petit pois",
        months: [4, 5, 6]
    },
    {
        name: "Piment",
        months: [6, 7, 8, 9]
    },
    {
        name: "Poire",
        months: [0, 1, 2, 3, 8, 9, 10, 11]
    },
    {
        name: "Poireau",
        months: [0, 1, 2, 8, 9, 10, 11]
    },
    {
        name: "Pois chiche",
        months: [4, 5, 6]
    },
    {
        name: "Poivron",
        months: [5, 6, 7]
    },
    {
        name: "Pomme",
        months: [0, 1, 2, 3, 8, 9, 10 ,11]
    },
    {
        name: "Pomme de terre",
        months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name: "Potimarron",
        months: [8, 9, 10, 11]
    },
    {
        name: "Potiron",
        months: [8, 9, 10, 11]
    },
    {
        name: "Prune",
        months: [7, 8, 9]
    },
    {
        name: "Prunelles",
        months: [10, 11]
    },
    {
        name: "Radis",
        months: [2, 3, 4, 5]
    },
    {
        name: "Raisin",
        months: [7, 8, 9, 10]
    },
    {
        name: "Rhubarbe",
        months: [4, 5]
    },
    {
        name: "Rutabaga",
        months: [0, 1, 9, 10, 11]
    },
    {
        name: "Salsifi",
        months: [0, 1, 9, 10, 11]
    },
    {
        name: "Tomate",
        months: [5, 6, 7, 8]
    },
    {
        name: "Topinambour",
        months: [0, 1, 2, 9, 10, 11]
    }
];

export default itemsList;