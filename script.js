let aminoAcids = [
    {name: 'Alanine', imgSrc: 'alanine.png', type:'image', },
    {name: 'Arginine', imgSrc: 'arginine.png', type:'image'},
    {name: 'Asparagine', imgSrc: 'asparagine.png', type:'image'},
    {name: 'Aspartic Acid', imgSrc: 'aspartic_acid.png', type:'image'},
    {name: 'Cysteine', imgSrc: 'cysteine.png', type:'image'},
    {name: 'Glutamine', imgSrc: 'glutamine.png', type:'image'},
    {name: 'Glutamic Acid', imgSrc: 'glutamic_acid.png', type:'image'},
    {name: 'Glycine', imgSrc: 'glycine.png', type:'image'},
    {name: 'Histidine', imgSrc: 'histidine.png', type:'image'},
    {name: 'Isoleucine', imgSrc: 'isoleucine.png', type:'image'},
    {name: 'Leucine', imgSrc: 'leucine.png', type:'image'},
    {name: 'Lysine', imgSrc: 'lysine.png', type:'image'},
    {name: 'Methionine', imgSrc: 'methionine.png', type:'image'},
    {name: 'Phenylalanine', imgSrc: 'phenylalanine.png', type:'image'},
    {name: 'Proline', imgSrc: 'proline.png', type:'image'},
    {name: 'Serine', imgSrc: 'serine.png', type:'image'},
    {name: 'Threonine', imgSrc: 'threonine.png', type:'image'},
    {name: 'Tryptophan', imgSrc: 'tryptophan.png', type:'image'},
    {name: 'Tyrosine', imgSrc: 'tyrosine.png', type:'image'},
    {name: 'Valine', imgSrc: 'valine.png', type:'image'},
	{name: 'Alanine', imgSrc: 'alanine.png', type:'text'},
    {name: 'Arginine', imgSrc: 'arginine.png', type:'text'},
    {name: 'Asparagine', imgSrc: 'asparagine.png', type:'text'},
    {name: 'Aspartic Acid', imgSrc: 'aspartic_acid.png', type:'text'},
    {name: 'Cysteine', imgSrc: 'cysteine.png', type:'text'},
    {name: 'Glutamine', imgSrc: 'glutamine.png', type:'text'},
    {name: 'Glutamic Acid', imgSrc: 'glutamic_acid.png', type:'text'},
    {name: 'Glycine', imgSrc: 'glycine.png', type:'text'},
    {name: 'Histidine', imgSrc: 'histidine.png', type:'text'},
    {name: 'Isoleucine', imgSrc: 'isoleucine.png', type:'text'},
    {name: 'Leucine', imgSrc: 'leucine.png', type:'text'},
    {name: 'Lysine', imgSrc: 'lysine.png', type:'text'},
    {name: 'Methionine', imgSrc: 'methionine.png', type:'text'},
    {name: 'Phenylalanine', imgSrc: 'phenylalanine.png', type:'text'},
    {name: 'Proline', imgSrc: 'proline.png', type:'text'},
    {name: 'Serine', imgSrc: 'serine.png', type:'text'},
    {name: 'Threonine', imgSrc: 'threonine.png', type:'text'},
    {name: 'Tryptophan', imgSrc: 'tryptophan.png', type:'text'},
    {name: 'Tyrosine', imgSrc: 'tyrosine.png', type:'text'},
    {name: 'Valine', imgSrc: 'valine.png', type:'text'}
];


// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setNewQuestion() {
    shuffleArray(aminoAcids);
    let currentAmino = aminoAcids[0];
    
    // Reset both text and image displays
    document.getElementById('aminoImg').style.display = 'none';
    document.getElementById('questionText').style.display = 'none';

    let optionButtons = document.querySelectorAll('.option');
    if (currentAmino.type === 'text') {
        // If the current question is a text type
        document.getElementById('questionText').style.display = 'block';
        document.getElementById('questionText').textContent = currentAmino.name;

        optionButtons.forEach(button => {
            button.classList.add('image-option'); // Add the image-option class for larger display
        });
    } else {
        // If the current question is an image type
        document.getElementById('aminoImg').style.display = 'block';
        document.getElementById('aminoImg').src = currentAmino.imgSrc;

        optionButtons.forEach(button => {
            button.classList.remove('image-option'); // Remove the image-option class for standard display
        });
    }
    
    let options = [currentAmino.name];
    while (options.length < 4) {
        let randomAmino = aminoAcids[Math.floor(Math.random() * aminoAcids.length)];
        if (!options.includes(randomAmino.name)) {
            options.push(randomAmino.name);
        }
    }
    shuffleArray(options);
    
    optionButtons.forEach((button, index) => {
        // Reset styles and content
        button.textContent = '';
        button.style.backgroundImage = '';
        button.style.backgroundSize = '';
        
        if (currentAmino.type === 'text') {
            // Set background image for answer choices
            button.style.backgroundImage = `url(${aminoAcids.find(aa => aa.name === options[index]).imgSrc})`;
            button.style.backgroundSize = 'contain';
        } else {
            // Set text content for answer choices
            button.textContent = options[index];
        }

        button.onclick = function() {
            if (this.textContent === currentAmino.name || this.style.backgroundImage.includes(currentAmino.imgSrc)) {
                alert('Correct!');
                setNewQuestion();
            } else {
                alert('Try Again!');
            }
        };
    });
}

document.getElementById('submitBtn').onclick = setNewQuestion;
setNewQuestion();

