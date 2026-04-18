// This file acts as our database for all Strands puzzles.
// The key is the date (YYYY-MM-DD) which will show up in the dropdown menu.

const puzzleDatabase = {
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