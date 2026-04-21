// This file acts as our database for all Strands puzzles.
// The key is the date (YYYY-MM-DD) which will show up in the dropdown menu.

/**
 * STRANDS PUZZLE ARCHITECTURE RULES:
 * * 1. THE GRID: Must be exactly 48 letters (6 columns x 8 rows).
 * 2. TOTAL COVERAGE: Every single letter in the 'letters' array MUST be used 
 * in exactly one 'themeWord' path. There are no "decoy" letters.
 * 3. ADJACENCY: Words must be formed by connecting adjacent letters. 
 * A letter at index [i] can only connect to a letter that is horizontally, 
 * vertically, or diagonally adjacent in the 6x8 grid.
 * 4. THE SPANGRAM: One word (the theme) must touch two opposite sides of the 
 * board (Left to Right or Top to Bottom).
 * 5. PATHING: The 'path' array contains the indices (0-47) of the letters.
 * Mapping: Index = (Row * 6) + Column.
 */

const puzzleDatabase = {
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
    
    "2026-04-21": {
        title: "House guests",
        letters: [
            "B", "I", "D", "E", "N", "Y",
            "K", "E", "N", "N", "E", "D",
            "P", "R", "E", "S", "I", "D",
            "N", "O", "N", "O", "N", "E",
            "I", "X", "B", "S", "T", "C",
            "R", "V", "A", "M", "O", "N",
            "O", "E", "E", "A", "L", "I",
            "O", "S", "L", "T", "N", "L"
        ],
        themeWords: [
            { id: 0, word: "PRESIDENTS", path: [12, 13, 14, 15, 16, 17, 23, 22, 28, 27], spangram: true },
            { id: 1, word: "BIDEN", path: [0, 1, 2, 3, 4], spangram: false },
            { id: 2, word: "KENNEDY", path: [6, 7, 8, 9, 10, 11, 5], spangram: false },
            { id: 3, word: "NIXON", path: [18, 24, 25, 19, 20], spangram: false },
            { id: 4, word: "OBAMA", path: [21, 26, 32, 33, 39], spangram: false },
            { id: 5, word: "ROOSEVELT", path: [30, 36, 42, 43, 37, 31, 38, 44, 45], spangram: false },
            { id: 6, word: "LINCOLN", path: [47, 41, 35, 29, 34, 40, 46], spangram: false }
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