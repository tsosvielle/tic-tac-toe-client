Read me for Tsosvielle's Tic-Tac-Toe project

Development Journal or "An unexpected journey, there and back again"

A tic tac toe game utilizing html, css, and javascript.

04/03/19
In order to make everyone's favorite game we needed to start with the bare
bones outline of a game board. After initial git hub init, deployment, and
push. API config was supplied with relevant links to support deployment stages
from here the work of creating initial buttons and div containers to house future
styling. The buttons will ultimately be housed in a bootstrap modal to act
as a site gate keeper.

Incorporated an if else statement that determines if an x or an o can be placed
and automatically changes turns once placed.

Incorporated an empty array and incorporated functionality that populates the array with the data-id number from html and populates
an array iteration with the current value of the playerTurn variable.

created an array of win conditions and logic to check the value of the current array vs the win conditions. Generates an alert (for now) that lets the user know theyve hit a win condition

04/04/19
added user registration, signin, passwordchange, and logout functionality with curl scripts

04/05/19

reworked game logic to use id's rather than data id's. Added game reset function
that clears array and html values of game components.

added api calls that tracked changes to the user game object and stored outcomes

added functionality to log total number of games played
