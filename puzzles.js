// This file acts as our database for all Strands puzzles.
// The key is the date (YYYY-MM-DD) which will show up in the dropdown menu.

const puzzleDatabase = {
    "2026-04-20": {
    title: "House guests",
    letters: [
        "W", "A", "S", "H", "I", "N",
        "G", "T", "O", "N", "E", "D",
        "Y", "D", "E", "N", "N", "I",
        "K", "E", "L", "I", "B", "B",
        "P", "R", "N", "C", "A", "O",
        "E", "S", "I", "O", "M", "L",
        "S", "D", "E", "L", "N", "N",
        "N", "T", "O", "X", "I", "A"
    ],
    themeWords: [
        { id: 0, word: "PRESIDENTS", path: [24, 25, 30, 31, 32, 37, 38, 43, 42, 36], spangram: true },
        { id: 1, word: "WASHINGTON", path: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], spangram: false },
        { id: 2, word: "KENNEDY", path: [18, 19, 12, 13, 14, 15, 16], spangram: false },
        { id: 3, word: "LINCOLN", path: [21, 27, 33, 39, 35, 41, 40], spangram: false },
        { id: 4, word: "OBAMA", path: [29, 23, 28, 34, 47], spangram: false },
        { id: 5, word: "BIDEN", path: [22, 17, 11, 10, 16], spangram: false },
        { id: 6, word: "NIXON", path: [42, 43, 44, 45, 46], spangram: false }
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