# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Duy Nguyen**

Time spent: **10** hours spent in total

Link to project: [https://glitch.com/edit/#!/bedecked-incongruous-horn](https://glitch.com/edit/#!/bedecked-incongruous-horn)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [1] Implemented styling so that the buttons stays as 2 rows even when the page have enough width to fit more than 4 buttons on 1 row.
- [2] Center everything in the middle of the page.
- [3] Added box shadow to the buttons to help the user knows which one they're clicking on.
- [4] Added a high score option when the game is won for players who want to play further than 8 element.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/ODAPmoh.gif)
![](https://i.imgur.com/rRMAsCe.gif)
![](https://i.imgur.com/lMGlDDB.gif)
![](https://i.imgur.com/PCX8ZlJ.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- [https://stackoverflow.com/](https://stackoverflow.com/)
- [https://www.w3schools.com/](https://www.w3schools.com/)
- [https://contactmentor.com/30-second-countdown-timer-js-sound/](https://contactmentor.com/30-second-countdown-timer-js-sound/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- The biggest challenge I encountered in creating this submission was to figure out the syntax and find the correct helper function to assist me in implementing the features that I want. For example, when I wanted to implement the time limit feature to make the game harder, it wasn't just using setInterval and clearInterval but I had to think of a way to use it to create a timer that is repeatable for each round of the game. I overcome this challenge by looking online for an example of other people trying to implement a similar feature. StackOverflow is a great source that I always look at when I face a problem, however, I couldn't find a way to integrate what they offered into my program. Then use what I learned from looking at their examples and try to create my own version of a timer but wasn't successful. After a while of unsuccessful attempts, I went back to searching for online resources and came across an example of a countdown timer that was similar to what I was trying to create. With that, I was able to create a working timer and implement it with the logic of the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- Some questions I have about web development after completing this submission are: Do you need to be creative to be successful as a web developer? Does web development care about time complexity? Does web development use data structure and algorithms? Are there more languages you need to know besides HTML, CSS, and JS? What's the typical workday of a web developer like? Who decides on a web's UI, are you supposed to come up with it or is there a certain look and layout that you have to follow? Does web developers have to take care of the security of the websites they created?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
- If I had a few more hours to work on this project I would spend them fixing a few bugs and implementing new features. A bug that I have right now is that the sounds playing can be overlapped when the player makes the guess while the pattern is playing. This could cause the next pattern to play while the current pattern hasn't finished playing if the player guesses the current pattern correctly before it finishes playing. This led to one of the additional features I want to add and that is if the player makes a guess at any time before the pattern finishes playing, the pattern would stop playing and the timer would start. Another feature that I would like to add is to let the user choose the number of buttons or the amount of time that they're allowed to make their guess. This would allow them to change the difficulty of the game as they see fit. 

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/9925b40c1b8a47db9e07d44930bacb9f)

## License

    Copyright [Duy Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


