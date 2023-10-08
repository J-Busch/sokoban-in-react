const data = [
    [
        ['_','_','_','_','W','W', 'W','W','W','W','_','_'],
        ['_','_','W','W','W','_', '_','_','_','W','_','_'],
        ['_','W','G','_','P','M', '_','_','_','W','_','_'],
        ['_','_','W','W','W','_', 'M','G','_','W','_','_'],
        ['_','W','W','G','W','W', 'M','_','_','W','_','_'],
        ['_','W','_','_','W','_', 'G','_','_','W','W','_'],
        ['_','W','W','M','_','MG','M','M','_','G','W','_'],
        ['_','_','W','_','_','_', 'G','_','W','_','W','_'],
        ['_','_','W','W','W','W', 'W','W','W','W','W','_'],
    ],

    [
        ['_','_','_','_','_','W','W','W','W','_','_','_'],
        ['_','W','W','W','W','W','_','_','W','W','W','_'],
        ['_','W','_','_','_','_','_','_','_','_','W','_'],
        ['_','W','_','M','M','G','W','W','W','_','W','_'],
        ['_','W','_','G','_','_','_','G','W','_','W','_'],
        ['_','W','_','W','W','W','M','M','M','_','W','_'],
        ['_','W','_','W','G','G','_','P','W','_','W','_'],
        ['_','W','_','_','_','_','_','_','_','_','W','_'],
        ['_','W','W','W','W','W','W','W','W','W','W','_'],
    ],

    [
        ['_','_','_','_','W','W','W', 'W','_','_','_','_'],
        ['_','_','_','W','W','_','_', 'W','_','_','_','_'],
        ['_','_','_','W','_','P','M', 'W','_','_','_','_'],
        ['_','_','_','W','W','M','_', 'W','W','_','_','_'],
        ['_','_','_','W','W','_','M', '_','W','_','_','_'],
        ['_','_','_','W','G','M','_', '_','W','_','_','_'],
        ['_','_','_','W','G','G','MG','G','W','_','_','_'],
        ['_','_','_','W','W','W','W', 'W','W','_','_','_'],
        ['_','_','_','_','_','_','_', '_','_','_','_','_'],
    ],

    [
        ['_','_','_','_','_', '_','_','_', '_','_','_','_'],
        ['_','W','W','W','W', 'W','W','W', 'W','W','W','_'],
        ['_','W','_','_','G', '_','_','G', 'W','W','W','_'],
        ['_','W','_','W','W', 'W','_','_', 'W','W','W','_'],
        ['_','W','_','_','W', 'W','_','_', 'W','W','W','_'],
        ['_','W','_','M','_', '_','M','M', '_','_','W','_'],
        ['_','W','W','W','W', '_','_','PG','W','W','W','_'],
        ['_','W','W','_','MG','_','_','MG','_','_','W','_'],
        ['_','W','W','W','W', 'W','W','W', 'W','W','W','_'],
    ],

    [
        ['_','_','W','W','W','W', 'W','W','_','_','_','_'],
        ['_','_','W','_','G','G', '_','W','W','W','W','_'],
        ['_','_','W','_','G','G', 'M','W','_','_','W','_'],
        ['_','_','W','_','_','_', '_','M','_','_','W','_'],
        ['_','_','W','W','M','G', 'W','_','M','_','W','_'],
        ['_','_','_','W','_','MG','W','M','_','P','W','_'],
        ['_','_','_','W','_','_', '_','_','_','W','W','_'],
        ['_','_','_','W','W','W', 'W','W','W','W','_','_'],
        ['_','_','_','_','_','_', '_','_','_','_','_','_'],
    ],
];

export const blankBoard = [
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_','_','_'],
];

export const types = {
    "_": "blank",
    "P": "player",
    "W": "wall",
    "M": "mover",
    "G": "goal",
    "PG": "player-on-goal",
    "MG": "mover-on-goal",
}

export default data;