Read me for Tsosvielle's Tic-Tac-Toe project

Development Journal or "An unexpected journey, there and back again"

## Technologies Used
HTML
CSS/CSS Bootstrap
javascript

## Wireframe and User Stories
Wireframe - https://imgur.com/TUC3387

Use Stories -

as a user i want to be able to pick up where i left off in case my game is interrupted or I am perhaps in transit
as a user i want to track my stats in a meaningful way over time
as a user i want to be able to easily understand the game regardless of my age
or comprehension skills
as a user i wat to be able to play with a friend or on my own or against a computer opponent
as a user i want to be able to create a login so i can track my games and stats at any time
as a user i want control over my account and password security
as a user i want to be able to change the aesthetic theme of the app
as a user i want the qaulity of the experience to maintain across devices
as a user i want
as a user i want access to instructions in case i havent played before or forgotten how
as a user i want interactivity to be responsive and fun


## Unsolved Problems and Future Development
The css components were the last on my priority list and when I got to them I ran into some issues with getting a few elements to work before the deadline.
The design needs another pass and will go through a few more iterations in the
coming months

I was unable to get any fonts from google to work with the preformated html.
I also wanted to add a function that would have winning spaces go through a hide/show loop at game win status but this ended up breaking my board clear
function and I again, ran out of time.

In the future I'd like to add some imagery, and animations to square clicks, mostly likely a delayed draw of some sort. I'd also like to add very subtle fades to button button click transitions.

Choosing starting playerturn, online play, and basic AI funcitons are also planned for futre iterations.

A theme picker is also planned for future iterations that lets you change the game aesthetics

Statistics tracking will be expanded in future iterations 



## Dev Diary
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

04/08/19
added reset functionality
added font family
