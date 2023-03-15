
# Application Website

## Table of Contents
1. [Planning](#Planning) 
  a. [Colour Palettes](#colour-palettes)  
  b. [Figma Design](#original-figma-design) 

2. [Building](#Building)  
3. [Debugging](#Debugging)

## Planning

Before starting building this site I chose the colour palette and created an initial design on Figma. I wanted something quite simple, with strong accent colours to keep the page interesting. The actual design of the site took a U-turn when I'd already built it. I felt like the strong accent colours weren't particularly reflective of who I am, and chose to go for a softer, more tonal palette, yet still with strong accent colours. This felt more inviting, and more of a personal website, rather than the original choices which in hindsight feel quite cold and corporate.

When I go to find colours, I either use coolors.co or I browse websites and use an app called ColorSlurp to pick out and save colours I like. It means when I go to change a palette, I've already got a whole selection to choose from.

### Colour Palettes
#### First Design:
| Use             | Colour/Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Main Background | ![#F9F9F9](https://via.placeholder.com/10/F9F9F9?text=+) #F9F9F9 |
| Background Accent | ![#FE1E00](https://via.placeholder.com/10/fe1e00?text=+) #FE1E00 |
| Headings | ![#1099FF](https://via.placeholder.com/10/1099ff?text=+) #1099FF |
| Main Text | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |


#### Final Design:
| Use             | Colour/Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Section Background | ![#F2F2EF](https://via.placeholder.com/10/F2F2EF?text=+) #F2F2EF |
| Section Background | ![#E9E7E2](https://via.placeholder.com/10/E9E7E2?text=+) #E9E7E2 |
| Section Background | ![#231F20](https://via.placeholder.com/10/231F20?text=+) #231F20 |
| Main Accent | ![#FE4631](https://via.placeholder.com/10/FE4631?text=+) #FE4631 |
| Accent | ![#ECB08B](https://via.placeholder.com/10/ECB08B?text=+) #ECB08B |
| Main Text | ![#1A1A1A](https://via.placeholder.com/10/1A1A1A?text=+) #1A1A1A |

### Original Figma Design:

![Original Website design](images/figma_design/figma_design-1.png)
![Original Website design](images/figma_design/figma_design-2.png)
![Original Website design](images/figma_design/figma_design-3.png)
![Original Website design](images/figma_design/figma_design-4.png)

## Building

1. Add skeleton HTML and CSS to recreate Figma Design.
2. Add pseudo-element background shapes and selfie.
3. Create responsive navbar.
4. Style redesign.
    - Change main fonts.
    - Edit layout.
    - Remove pseudo element selfie.
    - Change the entire colour palette.
5. Add a static section about my interests.
6. Add CSS animations.
6. Change interests section to be more interactive using mouseovers which hide/show divs.
7. Tweak copy for all sections.
8. Add media queries.
9. Merge the project gallery.
    - This had previously been a different site with a different design, but I thought it would be nice to include it in the main site.
10. Add extra media queries to improve fonts on mobile.
    - I found on my phone the fonts were appearing different to Chrome DevTools.


## Debugging

### Issue: Getting the interests section show/hide working properly.
I originally planned to have the user click on an interest icon and a dropdown would appear with text about that interest. However, I changed plans and decided to go for a mouseover as I hadn't used them before and thought it would make for a nice, smooth user interaction.

What I didn't realise is that without a mouseout handler, the text wouldn't hide after being hovered on. 

**Original code:**
```javascript
languageButton.addEventListener('mouseover', function() {
    toggleElement(languageButton, languageText);
});

```

**Solution:**.  

After some research, I realised that I needed to pair the mouseover with a mouseout handler, to make the text disappear when not hovering over the icon:

```javascript
languageButton.addEventListener('mouseout', function() {
    toggleElement(languageButton, languageText);
});
```

### Issue: Getting interests section to appear nicely on mobiles.

After I built the interactive interests section, I realised that it wasn't appearing nicely on mobiles as the icons appeared all in line, and were very small. I considered switching the layout to a flexbox layout which would wrap on smaller screens, but felt like it wouldn't be very user friendly. Instead, I decided to use the code that I had originally built the interests section with in combination with media queries, so that the display would switch from none to block.

Whilst this meant the section wasn't interactive on a mobile, it felt like it was a good way to make sure the information was clear, and easy to navigate.

**Solution:**

```html
<section class="interests-small-screen">
                <div>
                    <h2>What brings me joy?</h2>
                </div>
                <div>
                    <h4>Language</h4>
                    <p>
                        I believe that language holds a lot of power. It’s at the core of human connection
                        and through the smallest change in syntax you can completely alter meaning - I think 
                        this is beautiful. I studied English Language and Literature at the University 
                        of Leeds and believe that meaning is conveyed best through clear, concise language.
                    </p>
                </div>
            ...
```
```css
@media all and (max-width: 750px) {
    .interests {
      display: none;
    }

    .interests-small-screen {
      display: block;
    }
```