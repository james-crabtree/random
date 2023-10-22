console.log('Welcome to dress the biscuiitboy!!!')

// DISCLAIMER
// This was a very challenging programme and I used ChatGPT a lot to help me generate the code. I then asked ChatGPT for a full explanation of each
// piece of code so I could understand it. Right now I'm more focused on understanding code and why code works, rather than trying to completely
// write my own code.

// I started out with getting the code working for just the head first because once I got that working I could basically just copy and paste it for
// the other parts (body and shoes) and just change the HTML class links and the image sources.

// Initial variables for each body part
// let headIndex = 0 declares a variable and sets the starting value to 0 (representing head0.png). It keeps track of which head image is currently
// being displayed.
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 1

// The 2nd line of code basically just selects the class assigned to the head from the HTML file, so it basically links the JS and HTML file together.
const bodyVariable = document.querySelector('.dress-a-bisc.body')
const shoesVariable = document.querySelector('.dress-a-bisc.shoes')

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
      console.log('ArrowRight pressed body')
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
      console.log('ArrowRight pressed feet')
    }
  })
}

// FUNCTION TO SWITCH BETWEEN THE BODY, AND SHOES WHEN THE DOWN ARROW IS PRESSED

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
        clothingIndex = 1
        console.log('ArrowRight pressed change')
      }
    }
  })
}

// Call the functions to initialize the event listeners
// The code below just calls the 4 functions in which we have defined up above.
changeBiscBody()
changeBiscShoes()
toggleBodyPart()
