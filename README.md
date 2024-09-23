# Project 01 Retrospective and Overview: Yesterday's Weather

- [Github Repository](https://github.com/cs-mg-gh/cst438project01group09)
- [Youtube Video](https://www.youtube.com/watch?v=RcRCrChbT8c)

## Overview

This is a weather app that makes use of the [Weatherstack API](https://weatherstack.com/).

## Introduction

- Communication for this project was managed using our Slack groupchat as well as in-class work sessions.
- Initially we had around 12 user stories considered for this project.
- 11 user stories were completed by the end of the project.

## Project Setup

### Windows

1. Check node and npm versions ([node/npm] -v)
2. Update if needed ([node/npm] install -g @[latest version])
3. Navigate into repository
4. npm install -g expo cli
5. Navigate into Weather/ folder
6. npm start

### Mac

1. Check node and npm versions ([node/npm] -v)
2. Update if needed ([node/npm] install -g @[latest version])
3. Navigate into repository
4. npm install expo (or sudo npm install expo)
5. Navigate into Weather/ folder
6. npm start

## Change Log

- Aug 31st: Project Initialized
- Sep 7th: Login and Create Account Page Added
- Sep 10th: Database Connected with Login and Create Account Pages
- Sep 11th: App Displays Yesterday's Weather
- Sep 12th: Yesterday's Weather Screen Styling Improved. App Displays the Current Weather. Edit/Delete User Screen was Added
- Sep 13th: Text Input Box Added for User to Type Zip Code
  -Sep 20th: Added theme context to change color scheme

## Team Retrospective

### Diego Zavala

1. Diego's Github: [diezavala](https://github.com/diezavala)
2. Diego Zavala's [pull requests](https://github.com/cs-mg-gh/cst438project01group09/pulls?q=is%3Apr+is%3Aclosed+author%3Adiezavala)
3. Diego Zavala's [issues](https://github.com/cs-mg-gh/cst438project01group09/issues?q=is%3Aissue+is%3Aclosed+assignee%3Adiezavala)

#### What was your role/which stories did you work on

Diego mostly worked on the database functions of the app. This included creating a user, logging in with an existing user, and deleting a user. The work was not complicated but it was time consuming because of all the cases that had to be addressed incase a user makes a mistake on their part.

- What was the biggest challenge?
  - Creating the database and syncing it up to the user text inputs
- Why was it a challenge?
  - Being new to Expo, React Native, and TypeScript made it challenging to initialize the database and get it running before actually starting to connect it to the screens.
  - How was the challenge addressed?
  - Reading the Expo documentation and using ChatGPT to learn what the errors that were returned meant were good resources
- Favorite / most interesting part of this project?
  - Seeing it all come together after starting off clueless.
- If you could do it over, what would you change?
  - I would go straight to the Expo documentation first instead of watching Youtube tutorials that are outdated.
- What is the most valuable thing you learned?
  - Getting comfortable with working with a team and communicating well is key. Using Git commands was also a good refresher

### Luke Berry

1. Luke's Github: [LukeBerryCS](https://github.com/LukeBerryCS)
2. Luke Berry's [pull requests](https://github.com/cs-mg-gh/cst438project01group09/pulls?q=is%3Apr+is%3Aclosed+author%3ALukeBerryCS)
3. Luke Berry's [issues](https://github.com/cs-mg-gh/cst438project01group09/issues?q=is%3Aissue+is%3Aclosed+assignee%3ALukeBerryCS)

Luke managed interaction with the Weatherstack API, including displaying this data on the Current and Yesterday's Weather screens. Overall, this was not a very complicated part of the app to develop, but was extremely valuable.

- What was the biggest challenge?
      Finding an API that worked well for us in this project, as many either required high financial investment, or did not output all of the data we wanted.
- Why was it a challenge?
      There are many different Weather APIs, and historical/forecast data is locked behind a paywall in most APIs that we looked through.
- How was the challenge addressed?
      Eventually, we found the Weatherstack API which produced the data we wanted in a very easily usable format, including images. We did upgrade the plan we had to get access to forecast/historical weather data.
- Favorite / most interesting part of this project?
      It was very interesting to me to work with real-world and real-time data. 
- If you could do it over, what would you change?
      I would have liked to make the entire user experience much better. I think while we display all of the relevant data we can, it lacks a real great user experience, with some of the text wrapping in ways we would prefer it not to.
- What is the most valuable thing you learned?
      With my prior experience working with APIs, I was able to easily get started on working with the Weather API options. Throughout the project, we switched provider's several times, which helped me become more comfortable with working with different output formats and request requirements.

### Kyle Lynn

1. Kyle's Github: [KyleKrack](https://github.com/KyleKrack)
2. Kyle Lynn's [pull requests](https://github.com/cs-mg-gh/cst438project01group09/pulls?q=is%3Apr+is%3Aclosed+author%3AKyleKrack)
3. Kyle Lynn's [issues](https://github.com/cs-mg-gh/cst438project01group09/issues?q=is%3Aissue+is%3Aclosed+assignee%3AKyleKrack)

#### What was your role/which stories did you work on

Kyle mostly worked on the visual functions and a few misc components. For example, the theme context and the ability to change from a light mode to a dark mode across the entire app and the ability to input text for the API to read.

- What was the biggest challenge?
  - Learning a new software environment is never easy. It was a real challenege to learn it under pressure. I think I would have liked more guidance from the outset.
- Why was it a challenge?
  - I think I am so used to focusing narrowly on game programming that it made the structure of a RN app very unintuitive and I continuously made basic errors that cost a lot of time.
- How was the challenge addressed?
  - I spent a lot of time in the first two weeks on issues I couldn't for unknown technical reasons leaving me demoralized. Once I was able to get a better grasp of the project structre as a whole thanks to the help and guidance of my teammates, it was a bit easier to isolated individual problems to solve. That structure and support made all the difference.
- Favorite / most interesting part of this project?
  - It gave me an appreciation for other software environments that provide all the basic functionality out of the box. I think it was a triump that we were able to make it work after struggling quite a bit. I also kind of appreciate the idea of being assigned an impossible task and then overcoming it through cooperation and collaboration. Truely, the real app was the friends we made along the way.
- If you could do it over, what would you change?
  - I would have liked to get a better grasp of the fundamentals earlier by perhaps reading more, prototyping, and especially making sure all of our teammates are on the same page as soon as possible.
- What is the most valuable thing you learned?
  - The notion of a successful solo engineer is a complete myth.

### Matthew Garcia

1. Matthew's Github: [cs-mg-gh](https://github.com/cs-mg-gh)
2. Matthew Garcia's [pull requests](https://github.com/cs-mg-gh/cst438project01group09/pulls?q=is%3Apr+is%3Aclosed+author%3Acs-mg-gh)
3. Matthew Garcia's [issues](https://github.com/cs-mg-gh/cst438project01group09/issues?q=is%3Aissue+is%3Aclosed+assignee%3Acs-mg-gh)

   Matthew mostly worked on the search engine to fetch the cities by region and display the current weather of the searched city. This feature allows the user to use the “search by region” button, the user then inputs their city via name or zip code, and the search will fetch results based on the user’s input. The user will now have the ability to select the view button, that displays the current weather of the city. From that page, the user has the option to navigate back to home button to visit the home screen. If the city does not exist, the view button to display the weather results is not available.

— What was the biggest challenge?

The biggest challenge making the search engine work properly to display results from the API. After completing that challenge, the next challenge was to display that current weather from the API.

— Why was it a challenge?

This project was the first time I used Expo, TypeScript, and learning how to use more git commands. It was an interesting experience because of the timeframe and the functionality of the app within the small time frame.

— How was the challenge addressed?

Reading the Expo documentation and using ChatGPT for debugging, and also communicating with each other, being transparent with our experience and struggles, and figuring out a solution to work as a team to get the project done. The challenge was addressed via slack and 
in person conversations.

—Favorite / most interesting part of this project?

My favorite part of the project is working with teammates that hold leadership, accountability, respect, and communication, which created positive environment. The most interesting part of this project was seeing the entire work come along. It is a good feeling that we all got thrown into the water, and we all swam to stay afloat.

— If you could do it over, what would you change?

If I can start over, the first thing I would do is read each prompt, ask questions about git, how to install react native, and watch more tutorials on TypeScript.

— What is the most valuable thing you learned?

The most valuable thing that I learned is that this entire project was that it’s a learning experience for each teammate. We communicated well, addressed each issue we had about the project, and always came to a solution. When you work as a team, there is less stress and leads to more productivity.

## Conclusion

- How successful was the project?
    Overall, the project was successful. While we could have improved some areas, we did build a functional app that displays weather data within the requirements of the project.
- What was the largest victory?
    The largest victory for us was being able to get everyone to contribute at least some part of this project. Throughout the last few weeks, there were many issues with getting the project to run on certain teammates computer's, issues with APIs, and issues with getting emulators setup to run the application on our own device. By the final week, we were able to get this all sorted to work reliably. 
- Final assessment of the project
    In all, we had a great experience with this project. However, there are definitely things that will need to be improved in team workflow for the following projects. This will include a commitment to following along with the Agile development methodology on a consistent basis, while putting quality above speed.
