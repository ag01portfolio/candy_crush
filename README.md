# candy_crush-react

## Candy Crush Prototype in React ⚛️🍬

This is a simplified Candy Crush game built with React. It features core game logic for matching and scoring. https://github.com/ag01portfolio/candy_crush

Dev Doc :

1.  **Generate Random Colors:** Create an array of random candy colors.
2.  **Map to Candy Visuals:** Link these colors to display actual candy images.
3.  **Remove Initial Matches:** On first load, identify and clear any pre-existing rows or columns of 3 or 4 candies.
4.  **Gravity Cascade:** Shift remaining candies down to fill the emptied spaces.
5.  **Refill Top:** Introduce new random candies into the empty spots at the top.

**Level 2: User Interaction & Scoring 👆**

1.  **Enable Dragging:** Make candies draggable using the `draggable` attribute.
2.  **Handle Drag Over:** Allow dropping on other candy squares using `onDragOver`.
3.  **Implement Scoreboard:** Display and update the player's score based on matches made.
