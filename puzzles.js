// This file acts as our database for all Strands puzzles.
// The key is the date (YYYY-MM-DD) which will show up in the dropdown menu.

// https://iankelley05.github.io/createStrandsWords/
// Use above to help you generate the puzzle

const puzzleDatabase = {
        "2026-04-24": {
        "title": "Tiles of Truth",
        "letters": [
            "G", "N", "A", "T", "E", "D",
            "A", "R", "O", "C", "N", "R",
            "H", "C", "B", "J", "I", "M",
            "M", "A", "S", "H", "A", "W",
            "B", "T", "N", "E", "R", "D",
            "O", "O", "F", "A", "L", "R",
            "O", "L", "G", "C", "H", "A",
            "N", "O", "O", "W", "E", "R"
        ],
        "themeWords": [
            { "id": 0, "word": "MAHJONG", "path": [17, 22, 21, 15, 8, 1, 0], "spangram": true},
            { "id": 1, "word": "DRAGON", "path": [29, 28, 33, 38, 43, 42], "spangram": false},
            { "id": 2, "word": "BAMBOO", "path": [14, 19, 18, 24, 30, 36], "spangram": false },
            { "id": 3, "word": "CHARACTER", "path": [13, 12, 6, 7, 2, 9, 3, 4, 11], "spangram": false},
            { "id": 4, "word": "FLOWER", "path": [32, 37, 44, 45, 46, 47], "spangram": false},
            { "id": 5, "word": "WIND", "path": [23, 16, 10, 5], "spangram": false},
            { "id": 6, "word": "CHARLESTON", "path": [39, 40, 41, 35, 34, 27, 20, 25, 31, 26], "spangram": false}
        ]
    },
    
    "2026-04-23": {
        "title": "Table for two?",
        "letters": [
            "L", "A", "H", "C", "U", "S",
            "Z", "V", "E", "A", "A", "U",
            "I", "A", "K", "A", "Y", "R",
            "D", "T", "A", "U", "N", "G",
            "I", "N", "I", "F", "U", "T",
            "D", "I", "N", "G", "O", "A",
            "I", "N", "L", "O", "Z", "Z",
            "P", "A", "R", "R", "P", "I"
        ],
        "themeWords": [
            { "id": 0, "word": "DININGOUT", "path": [30, 36, 37, 31, 32, 33, 34, 28, 29], "spangram": true },
            { "id": 1, "word": "PARLORPIZZA", "path": [42, 43, 44, 38, 39, 45, 46, 47, 41, 40, 35], "spangram": false },
            { "id": 2, "word": "DINTAIFUNG", "path": [18, 24, 25, 19, 20, 26, 27, 21, 22, 23], "spangram": false },
            { "id": 3, "word": "AUCHEVAL", "path": [10, 4, 3, 2, 8, 7, 1, 0], "spangram": false },
            { "id": 4, "word": "IZAKAYA", "path": [12, 6, 13, 14, 15, 16, 9], "spangram": false },
            { "id": 5, "word": "SUR", "path": [5, 11, 17], "spangram": false }
        ]
    },

    "2026-04-22": {
        "title": "Earth Day",
        "letters": [
            "W", "H", "R", "E", "C", "Y",
            "I", "T", "C", "E", "L", "C",
            "L", "R", "I", "T", "M", "I",
            "L", "A", "A", "S", "A", "L",
            "Y", "E", "L", "E", "T", "C",
            "O", "Y", "P", "U", "R", "E",
            "U", "M", "A", "T", "O", "O",
            "B", "E", "N", "S", "D", "W"
        ],
        "themeWords": [
            { "id": 0, "word": "WILLYOUBEMYEARTH", "path": [0, 6, 12, 18, 24, 30, 36, 42, 43, 37, 31, 25, 19, 13, 7, 1], "spangram": true},
            { "id": 1, "word": "RECYCLE", "path": [2, 3, 4, 5, 11, 10, 9], "spangram": false },
            { "id": 2, "word": "PLASTIC", "path": [32, 26, 20, 21, 15, 14, 8], "spangram": false },
            { "id": 3, "word": "NATURE", "path": [44, 38, 39, 33, 34, 35], "spangram": false },
            { "id": 4, "word": "CLIMATE", "path": [29, 23, 17, 16, 22, 28, 27], "spangram": false },
            { "id": 5, "word": "WOODS", "path": [47, 41, 40, 46, 45], "spangram": false }
        ]
    },

    "2026-04-21": {
        "title": "House guests",
        "letters": [
            "K", "D", "E", "E", "R", "P",
            "E", "I", "N", "S", "O", "B",
            "N", "B", "D", "I", "M", "A",
            "N", "E", "E", "N", "A", "R",
            "L", "D", "N", "I", "T", "O",
            "I", "Y", "T", "X", "L", "O",
            "N", "L", "S", "O", "E", "S",
            "C", "O", "N", "N", "V", "E"
        ],
        "themeWords": [
            { "id": 0, "word": "PRESIDENTS", "path": [5, 4, 3, 9, 15, 14, 20, 26, 32, 38], "spangram": true },
            { "id": 1, "word": "BIDEN", "path": [13, 7, 1, 2, 8], "spangram": false },
            { "id": 2, "word": "KENNEDY", "path": [0, 6, 12, 18, 19, 25, 31], "spangram": false },
            { "id": 3, "word": "NIXON", "path": [21, 27, 33, 39, 45], "spangram": false },
            { "id": 4, "word": "OBAMA", "path": [10, 11, 17, 16, 22], "spangram": false },
            { "id": 5, "word": "ROOSEVELT", "path": [23, 29, 35, 41, 47, 46, 40, 34, 28], "spangram": false },
            { "id": 6, "word": "LINCOLN", "path": [24, 30, 36, 42, 43, 37, 44], "spangram": false }
        ]
    },

    "2026-04-20": {
        title: "Up in smoke",
        letters: [
            "M", "U", "N", "M", "N", "S",
            "E", "S", "C", "A", "O", "O",
            "I", "H", "I", "R", "I", "P",
            "B", "O", "N", "J", "N", "D",
            "B", "L", "G", "U", "C", "I",
            "S", "U", "N", "A", "A", "J",
            "A", "V", "T", "N", "I", "O",
            "T", "I", "A", "A", "N", "T"
        ],
        themeWords: [
            { id: 0, word: "MARIJUANA", path: [3, 9, 15, 14, 21, 27, 33, 39, 45], spangram: true },
            { id: 1, word: "MUNCHIES", path: [0, 1, 2, 8, 13, 12, 6, 7], spangram: false },
            { id: 2, word: "SNOOP", path: [5, 4, 10, 11, 17], spangram: false },
            { id: 3, word: "INDICA", path: [16, 22, 23, 29, 28, 34], spangram: false },
            { id: 4, word: "BONG", path: [18, 19, 20, 26], spangram: false },
            { id: 5, word: "BLUNT", path: [24, 25, 31, 32, 38], spangram: false },
            { id: 6, word: "SATIVA", path: [30, 36, 42, 43, 37, 44], spangram: false },
            { id: 7, word: "JOINT", path: [35, 41, 40, 46, 47], spangram: false }
        ]
    },
    
    "2026-04-19": {
        title: "Midnight cravings",
        letters: [
            "G", "O", "L", "H", "S", "U",
            "H", "F", "D", "E", "S", "G",
            "S", "I", "D", "R", "H", "C",
            "S", "W", "E", "I", "S", "A",
            "S", "A", "T", "Y", "D", "N",
            "I", "K", "I", "O", "A", "R",
            "M", "H", "T", "O", "T", "I",
            "O", "C", "Y", "B", "E", "P"
        ],
        themeWords: [
            { id: 0, word: "SWEDISHCANDY", path: [18, 19, 20, 14, 21, 22, 16, 17, 23, 29, 28, 27], spangram: true },
            { id: 1, word: "PIRATEBOOTY", path: [47, 41, 35, 34, 40, 46, 45, 39, 33, 38, 44], spangram: false },
            { id: 2, word: "GOLDFISH", path: [0, 1, 2, 8, 7, 13, 12, 6], spangram: false },
            { id: 3, word: "GUSHERS", path: [11, 5, 4, 3, 9, 15, 10], spangram: false },
            { id: 4, word: "TAKIS", path: [26, 25, 31, 30, 24], spangram: false },
            { id: 5, word: "MOCHI", path: [36, 42, 43, 37, 32], spangram: false }
        ]
    },
    "2026-04-18": {
        title: "One man's trash...",
        letters: [
            "N", "T", "E", "A", "T", "R",
            "I", "A", "G", "E", "H", "E",
            "V", "U", "I", "Q", "L", "G",
            "T", "H", "N", "U", "K", "N",
            "D", "I", "R", "E", "I", "C",
            "E", "N", "F", "T", "A", "R",
            "I", "R", "O", "S", "O", "A",
            "C", "M", "S", "R", "D", "S"
        ],
        themeWords: [
            { id: 0, word: "THRIFTING", path: [18, 19, 26, 25, 32, 33, 28, 23, 17], spangram: true },
            { id: 1, word: "CROSSROADS", path: [42, 37, 38, 39, 44, 45, 40, 41, 46, 47], spangram: false },
            { id: 2, word: "UNIQUE", path: [13, 20, 14, 15, 21, 27], spangram: false },
            { id: 3, word: "VINTAGE", path: [12, 6, 0, 1, 7, 8, 2], spangram: false },
            { id: 4, word: "RACK", path: [35, 34, 29, 22], spangram: false },
            { id: 5, word: "DENIM", path: [24, 30, 31, 36, 43], spangram: false },
            { id: 6, word: "LEATHER", path: [16, 9, 3, 4, 10, 11, 5], spangram: false }
        ]
    },
    "2026-04-17": {
        title: "Raise your glasses",
        letters: [
            "L", "V", "P", "S", "U", "R",
            "S", "C", "H", "R", "E", "S",
            "N", "A", "E", "V", "I", "N",
            "A", "L", "A", "L", "Z", "G",
            "A", "T", "O", "M", "T", "O",
            "V", "E", "G", "A", "S", "M",
            "K", "E", "N", "J", "A", "X",
            "G", "O", "A", "T", "Y", "W"
        ],
        themeWords: [
            { id: 0, word: "SURSERVING", path: [3, 4, 5, 11, 10, 9, 15, 16, 17, 23], spangram: true },
            { id: 1, word: "LVP", path: [0, 1, 2], spangram: false },
            { id: 2, word: "SCHEANA", path: [6, 7, 8, 14, 13, 12, 18], spangram: false },
            { id: 3, word: "LALA", path: [21, 20, 19, 24], spangram: false },
            { id: 4, word: "TOMTOM", path: [25, 26, 27, 28, 29, 35], spangram: false },
            { id: 5, word: "VEGAS", path: [30, 31, 32, 33, 34], spangram: false },
            { id: 6, word: "GOAT", path: [42, 43, 44, 45], spangram: false },
            { id: 7, word: "JAX", path: [39, 40, 41], spangram: false },
            { id: 8, word: "KEN", path: [36, 37, 38], spangram: false }
        ]
    }
};