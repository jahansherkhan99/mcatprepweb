let aminoAcids = [
    {name: 'Alanine', imgSrc: 'alanine.png', polarity:'nonpolar'},
    {name: 'Arginine', imgSrc: 'arginine.png', polarity:'basic'},
    {name: 'Asparagine', imgSrc: 'asparagine.png', polarity:'uncharged'},
    {name: 'Aspartic Acid', imgSrc: 'aspartic_acid.png', polarity:'acidic'},
    {name: 'Cysteine', imgSrc: 'cysteine.png', polarity:'special'},
    {name: 'Glutamine', imgSrc: 'glutamine.png', polarity:'uncharged'},
    {name: 'Glutamic Acid', imgSrc: 'glutamic_acid.png', polarity:'acidic'},
    {name: 'Glycine', imgSrc: 'glycine.png', polarity:'special'},
    {name: 'Histidine', imgSrc: 'histidine.png', polarity:'basic'},
    {name: 'Isoleucine', imgSrc: 'isoleucine.png', polarity:'nonpolar'},
    {name: 'Leucine', imgSrc: 'leucine.png', polarity:'nonpolar'},
    {name: 'Lysine', imgSrc: 'lysine.png', polarity:'basic'},
    {name: 'Methionine', imgSrc: 'methionine.png', polarity:'nonpolar'},
    {name: 'Phenylalanine', imgSrc: 'phenylalanine.png', polarity:'nonpolar'},
    {name: 'Proline', imgSrc: 'proline.png', polarity:'special'},
    {name: 'Serine', imgSrc: 'serine.png', polarity:'uncharged'},
    {name: 'Threonine', imgSrc: 'threonine.png', polarity:'uncharged'},
    {name: 'Tryptophan', imgSrc: 'tryptophan.png', polarity:'nonpolar'},
    {name: 'Tyrosine', imgSrc: 'tyrosine.png', polarity:'nonpolar'},
    {name: 'Valine', imgSrc: 'valine.png', polarity:'nonpolar'},
];

let currentAmino = null;

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.onload = function() {
    // Set the first question
    setNewQuestion();

    // Attach event listener
    document.getElementById('submitBtn').onclick = function() {
        console.log("Button Clicked"); // debug statement
        checkAnswer();
    };
};

function setNewQuestion() {
    shuffleArray(aminoAcids);
    currentAmino = aminoAcids[0];

    document.getElementById('aminoImg').src = currentAmino.imgSrc;
    document.getElementById('aminoName').textContent = currentAmino.name;
}

function checkAnswer() {
    let selectedOption = document.querySelector('input[name="polarity"]:checked');

    if (selectedOption && selectedOption.value === currentAmino.polarity) {
        alert('Correct!');
        setNewQuestion();
    } else {
        alert('Try Again!');
    }
}
