# Where to find this Project

This project was deployed using Vercel and can be found [here](https://deck-of-cards-chapmanm3.vercel.app)

## Global Context

This project uses a React Context provider which wraps and passes all the buisness logic around managing decks / hands through the app.
- Redux could have been used here but this application was small enough that context providers sufficed.

## Business Logic

All logic around retreiving and parsing Decks / Hands can be found in [utils](src/utils/utils.ts).
 - This includes a large function named `calculateBestHand()` which holds all the logic for calculating the best hand given an Array of 5 Card objects.

## Types

The [types](src/types/index.ts) file contains all the projects types (Hands, Cards, etc).

## TODOS:

This took ~5+ hours to complete, that being said with more time there are a few things I'd like to add.

- [ ] Styling: Theres almost no styling in this app minus one div with inline styles. Given more time I'd like to make this app dark theme, style the buttons, and give the hand list some love.
- [ ] Images: The Deck of Cards API provies URL's to images of the playing cards. That would be a nice add with some styling to render each cards image.
- [ ] Clean up / Optimize: The util function to calculate the best hand is very large. It can for sure be broken out into 2-3 smaller functions making it more testable. I'm also sure the algorithms are not the optimal solution though clever in some [spots](https://github.com/chapmanm3/deck-of-cards/blob/c9b00a4366a2a9dd6cc4a3c87e36faeeadc5d209/src/utils/utils.ts#L127).
- [ ] Testing: Though the `calculateBestHand` function is thoroughly testing the rest of the app is not.
