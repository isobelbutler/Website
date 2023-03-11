// --- Variables

    // Interests Images - To be mouseovered
let languageButton = document.getElementById('language_button');
let designButton = document.getElementById('design_button');
let exerciseButton = document.getElementById('exercise_button');
let peopleButton = document.getElementById('people_button');
let logicButton = document.getElementById('logic_button');

    // Hidden Interests Description Text - Will show after mouseover
let languageText = document.getElementById('language_text');
let designText = document.getElementById('design_text');
let exerciseText = document.getElementById('exercise_text');
let peopleText = document.getElementById('people_text');
let logicText = document.getElementById('logic_text');

// --- Styling - Necessary for Show/Hide on Mouseover
languageText.style.display = "none";
designText.style.display = "none";
exerciseText.style.display = "none";
peopleText.style.display = "none";
logicText.style.display = "none";


// --- Functions

    // Toggles between showing/hiding the text - for use interests section on mouseover
function toggleElement (button, element) {
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

// Event Listeners
    // These all listen for a mouseover/mouseout on the interests image/button which 
    // then toggles the display of the text element. Only one text description shows 
    // at a time due to the mouseout listener.
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


