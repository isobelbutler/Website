// Variables
let interestsButtons = document.querySelectorAll('.block-1-hidden');

let languageButton = document.getElementById('language_button');
let designButton = document.getElementById('design_button');
let exerciseButton = document.getElementById('exercise_button');
let peopleButton = document.getElementById('people_button');
let logicButton = document.getElementById('logic_button');

let languageText = document.getElementById('language_text');
let designText = document.getElementById('design_text');
let exerciseText = document.getElementById('exercise_text');
let peopleText = document.getElementById('people_text');
let logicText = document.getElementById('logic_text');

languageText.style.display = "none";
designText.style.display = "none";
exerciseText.style.display = "none";
peopleText.style.display = "none";
logicText.style.display = "none";


// Functions

function toggleElement (button, element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Event Listeners

languageButton.addEventListener('mouseover', function() {
    toggleElement(languageButton, languageText);
});
languageButton.addEventListener('mouseout', function() {
    toggleElement(languageButton, languageText);
});

designButton.addEventListener('mouseover', function() {
    toggleElement(designButton, designText);
});

designButton.addEventListener('mouseout', function() {
    toggleElement(designButton, designText);
});

exerciseButton.addEventListener('mouseover', function() {
    toggleElement(exerciseButton, exerciseText);
});

exerciseButton.addEventListener('mouseout', function() {
    toggleElement(exerciseButton, exerciseText);
});

peopleButton.addEventListener('mouseover', function() {
    toggleElement(peopleButton, peopleText);
});

peopleButton.addEventListener('mouseout', function() {
    toggleElement(peopleButton, peopleText);
});

logicButton.addEventListener('mouseover', function() {
    toggleElement(logicButton, logicText);
});

logicButton.addEventListener('mouseout', function() {
    toggleElement(logicButton, logicText);
});


