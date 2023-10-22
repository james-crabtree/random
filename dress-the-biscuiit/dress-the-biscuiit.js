console.log('Welcome to dress the biscuiit!!!!')

// DISCLAIMER
// This code was copied from another similar project that I did while working at Dev Academy. The code is almost identical except I had to
// edit a few function names and remove a few redundant functions that were in the original project, but won't be in this one.

// This imports the save function from the screenshot.js Javascript file
import { save } from './screenshot.js'

// Initial variables for each body part
// let headIndex = 0 declares a variable and sets the starting value to 0 (representing head0.png). It keeps track of which head image is currently
// being displayed.
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 0 // 0 is the default which is the head, 1 is the body, and 2 is the shoes.

// The 2nd line of code basically just selects the class assigned to the head from the HTML file, so it basically links the JS and HTML file together.
const headVariable = document.querySelector('.dress-an-image.biscHead')
const bodyVariable = document.querySelector('.dress-an-image.body')
const shoesVariable = document.querySelector('.dress-an-image.shoes')

// HEAD

// This creates a function that we will put the code in to actually change the head of the clown.
// if (clothingIndex === 0) {: This if statement checks if the clothingIndex variable is equal to 0. This condition ensures that the code inside the
// if block will only run when you're currently selecting the clown's head (not body or shoes).
// The 3rd and 4th lines of the code are for handling the key input, when the right arrow key is pressed then part of the code will be executed.
// headIndex++ means that if the right arrow is pressed, it increases the headIndex variable by 1, which switches it to another head.
// The final if statement checks to see if the headIndex is greater than 5. If it is that means we have reached the last head png and there is no
// more to change after that, so it will revert the headIndex back to 0 which will then start the whole process again.
function changeClownHead() {
  document.addEventListener('keydown', (event) => {
    if (clothingIndex === 0) {
      if (event.code === 'ArrowRight') {
        headIndex++
        if (headIndex > 5) {
          headIndex = 0
        }

        // This code is similar to the one above but checks to see if the left arrow key is pressed, then activates the code if it is.
        // If the headIndex number becomes less than 0 then it will switch the headIndex to 5, as there is nothing below 0. This is the same principal
        // as above, it's just basically been flipped around.
      } else if (event.code === 'ArrowLeft') {
        headIndex--
        if (headIndex < 0) {
          headIndex = 5
        }
      }
      const headSrc = `./images/head${headIndex}.png`
      headVariable.src = headSrc // Define variables to keep track of the current indices for head, body, and shoes
    }
  })
}

// BODY

function changeBiscBody() {
  document.addEventListener('keydown', (event) => {
    if (clothingIndex === 1) {
      if (event.code === 'ArrowRight') {
        bodyIndex++
        if (bodyIndex > 5) {
          bodyIndex = 0
        }
      } else if (event.code === 'ArrowLeft') {
        bodyIndex--
        if (bodyIndex < 0) {
          bodyIndex = 5
        }
      }
      const bodySrc = `./images/body${bodyIndex}.png`
      bodyVariable.src = bodySrc
    }
  })
}

// SHOES

function changeBiscShoes() {
  document.addEventListener('keydown', (event) => {
    if (clothingIndex === 2) {
      if (event.code === 'ArrowRight') {
        shoesIndex++
        if (shoesIndex > 5) {
          shoeIsndex = 0
        }
      } else if (event.code === 'ArrowLeft') {
        shoesIndex--
        if (shoesIndex < 0) {
          shoesIndex = 5
        }
      }
      const shoesSrc = `./images/shoes${shoesIndex}.png`
      shoesVariable.src = shoesSrc
    }
  })
}

// FUNCTION TO SWITCH BETWEEN THE HEAD, BODY, AND SHOES WHEN THE DOWN ARROW IS PRESSED

// This function controls the down arrow key selecting different parts of the body.
// Works very similiar to the functions for changing the head, body and shoes.
// Pressing the down arrow will increase the clothingIndex (defined at the top) by 1, with the max being 2. (0 = head, 1 = body, 2 = shoes).
// When the clothingIndex becomes greater than 2, then it instead switches itself back down to 0.
// This means, if you are currently changing the shoes (2) and then click the down arrow again, it will switch back to changing the head (0).
function toggleBodyPart() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowDown') {
      clothingIndex++
      if (clothingIndex > 2) {
        clothingIndex = 0
      }
    }
  })
}

// CHATGPT HELPED GENERATE THIS
// Call the functions to initialize the event listeners
// The code below just calls the 4 functions in which we have defined up above.
changeClownHead()
changeBiscBody()
changeBiscShoes()
toggleBodyPart()
