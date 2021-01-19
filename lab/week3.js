let numberOfProducts        // expects a Number 
let products                // expects an Array of product data
let promotion1Description   // expects a String describing the promotion
let promotion2Description   // expects a String describing the promotion
let promotion3Description   // expects a String describing the promotion
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript:
//   Math.floor(Math.random() * x)

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  numberOfProducts = database.products.length
  products = database.products
  promotion1Description = database.products[0].description
  promotion2Description = database.products[1].description
  promotion3Description = database.products[2].description
  promotion1Icon = `<img src="${database.products[0].image}" class="inline w-16 die1">`
  promotion2Icon = `<img src="${database.products[1].image}" class="inline w-16 die1">`
  promotion3Icon = `<img src="${database.products[2].image}" class="inline w-16 die1">`

  // console.log( numberOfProducts = database.products.length)



  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  console.log(database)

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}