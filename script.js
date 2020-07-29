// GLOBAL VARIABLES
const bank = [
    'Dan speaks',
    'Crew shout-out',
    'Guest star on podcast',
    '"Another One"',
    '"You know what I mean?"',
    'Donald sings',
    'Ask Bill segment',
    'Sports talk',
    'Star Wars talk',
    'Joelle speaks',
    'Donald is late',
    'John C. McGinley praise',
    'Fan gets more than 2 questions',
    '"5, 6, 7, 8!" from Bill Lawrence',
    'Garden State mention',
    'Remember the Titans mention',
    'Season 9 mention',
    '"Medical Jargon"',
    'Nurse appreciation',
    '"Ask The Todd" segment',
    '"Scrubs Wiki" segment',
    'Audition story',
    'Donald not knowing his lines',
    'Ringtone idea',
    '"That\'s so funny"',
    'Donald finishes the in 30 seconds exactly',
    'Donald finishes the recap in under 30 seconds',
    'Donald finishes the recap in over 30 seconds',
    'Weed talk',
    '"C\'mon buddy."',
    '"But _____ always crushes it."',
    'Bill accused of being "freaky"',
    '"Whatcha tryina get into Adeosun??',
    'Donald references hip-hop or rap',
    'Someone forgets filming a scene',
    'Donald complains about his IG following',
    'Zach sings',
    'Zach mentions musicals',
    'Praise of The Todd\'s line(s)',
    'Zach and Donald argue',
    '"Can we get (back) to the show, Donald?!"',
    'Joshua Radin shout-out',
    'Thunderous applause',
    'Donald does his Oprah voice',
    'Zach gets mad at Donald for Oprah voice or being loud',
    'Zach does his Aaron Neville impression',
    'Donald does his Aaron Neville impression',
    'Donald does his Neil Diamond impression',
];
let newBank = [];


// While loop that accesses a random quip and then pushes that random quip into the newBank variable
function firstLoop() {
    while (newBank.length < 24) {
        // Create random integer between 0 and the length of the bank, minus 1
        const randomInt = Math.floor(Math.random() * (bank.length - 1));

        // Create a randomQuip by using the slice method on the bank array with the start index of the randomInt and the end of randomInt plus 1
        const quipSlice = bank.slice(randomInt, randomInt + 1);
        const randomQuip = quipSlice[0];

        // If the randomQuip is not found in the newBank array, push it to newBank
        if (newBank.indexOf(randomQuip) === -1) {
            // Push that randomQuip to the newBank array 
            newBank.push(randomQuip);
        }
    }
    console.log(newBank);
}

// For loop that appends the quips into the HTML
function appendQuips() {
    for (let i = 0; i < 24; ++i) {
        const nbQuip = newBank[i];
        // const sqNum = document.getElementById(`sq${i}`);
        document.getElementById(`sq${i}`).innerHTML = nbQuip;
    }
}

// Connect logic to button
function buttonClick() {
    // ----------- Need logic to clear board on button click -----------
    for (let i = 0; i < 24; ++i) {
        document.getElementById(`sq${i}`).innerHTML = '';
    }

    firstLoop();
    appendQuips();
};

// Integrate printing to a pdf