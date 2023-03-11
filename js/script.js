// Variables

    // Interests Section Images - To be mouseovered
let languageButton = document.getElementById('language_button');
let designButton = document.getElementById('design_button');
let exerciseButton = document.getElementById('exercise_button');
let peopleButton = document.getElementById('people_button');
let logicButton = document.getElementById('logic_button');

    // Interests Section Hidden Description Text - Will show after mouseover
let languageText = document.getElementById('language_text');
let designText = document.getElementById('design_text');
let exerciseText = document.getElementById('exercise_text');
let peopleText = document.getElementById('people_text');
let logicText = document.getElementById('logic_text');

   // Project Gallery Text
   let html = '';

   // Project Gallery Section Card Data
let gallery = [
   {
     image: 'images/website.png',
     project: 'Main Website',
     link: '#project-gallery',
     caption: 'Who I am, why I want to be a developer, and what I\'ve learned so far.',
   },
   {
     image: 'images/hobby.png',
     project: 'Hobby Page',
     link: 'https://isobelbutler.github.io/Hobby-Page/',
     caption: 'A guide to cycling the Coast to Coast.',
   },
   {
     image: 'images/movie.png',
     project: 'Movie Data',
     link: 'https://isobelbutler.github.io/Movie-Data/',
     caption: 'Review your favourite movie and filter the displayed information.',
   },
   {
     image: 'images/gallery.png',
     project: 'Project Gallery',
     link: '#project-gallery',
     caption: 'A flex-box layout gallery of the completed application projects.',
   },
   {
     image: 'images/game.png',
     project: 'Feature',
     link: 'https://isobelbutler.github.io/Game/',
     caption: 'A farm harvest game.',
   },
   {
     image: 'images/oldwebsite.png',
     project: 'Portfolio',
     link: 'https://isobelbutler.co.uk/',
     caption: 'My old WordPress work website.',
   },
   {
     image: 'images/soak.png',
     project: 'Soak Services',
     link: 'https://www.soak.services/',
     caption: 'A onepage, static website for a small drainage company.',
   },
   {
     image: 'images/wealden.png',
     project: 'Wealden Green Party',
     link: 'https://wealden.greenparty.org.uk/',
     caption: 'A wordpress redesign for the Wealden Green Party. This used existing templates created by the Green Party.',
   }

 ];

// Styling - Necessary for Interests Show/Hide on Mouseover
languageText.style.display = "none";
designText.style.display = "none";
exerciseText.style.display = "none";
peopleText.style.display = "none";
logicText.style.display = "none";

// Functions

    // Toggles between showing/hiding the interests section text - for use on mouseover
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

// Loops
    // Creates the Project Gallery Repeated Cards from the Data Object
  for (let i = 0; i < gallery.length; i++) {
    let card = gallery[i];
    html +=
      `<div class="flex-item">             
        <figure>
        <a href="${card.link}" target="_blank"><img src="${card.image}" alt="filler" class="flex-image"></a>
            <figcaption>
                <div><a href="${card.link}" target="_blank">${card.project}</a></div>

                <button class="plus-symbol">&plus;</button>
            </figcaption>
        </figure>
        
        <div class="captionHide" style="display:none">
          ${card.caption}
        </div>
      </div>`;  
}

document.querySelector('.gallery-container').insertAdjacentHTML('beforeend', html); 

    // Adds the show/hide caption to each Project Gallery Card
for (let i = 0; i < gallery.length; i++) {

document.querySelectorAll(".plus-symbol")[i].addEventListener("click", function() {

  var x = document.querySelectorAll(".captionHide")[i]; // By using querySelectorAll and captionHide as a class, you can select which index number to affect.
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
});
}

