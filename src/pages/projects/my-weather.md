---
layout: ../../layouts/ProjectLayout.astro
title: myWeather
client: The Odin Project
video: /my_weather.mp4
planningVideo: /my_weather_planning.mp4
description: myWeather is an application designed to provide users the ability to check both the current weather of a city, as well as its weather for the week! It utilizes three different APIs in combination with one another to provide quick, accurate, and thorough information for the user to take advantage of! Curious about how hot it may be in New Delhi, India? Or did you forget to check the weather for your upcoming trip to Anchorage, Alaska? No problem! Whether it be one or the other myWeather's got you covered! 
problem: Create a weather forecast website application that allows its users to search for a specific location, and then dynamically display the location's current and weekly weather information onto the webpage. 
problemOne: Practice the implementation of both promises, and async/await to increase my confidence and comfortability with asynchronous processes. Specifically, I aimed to really understand JavaScript's event loop, runtime, and its single-threaded nature. 

problemTwo: Gain a sense of how to properly deal with API Keys and become aware of security practices in the web.

problemThree: Employ best practices with respect to objects and JSON data to help facilitate my comprehension of OOP principles and programming concepts.

shortcomings: Unexpectedly, I found this project to be one of the easier ones I had built thus far and when comparing it to the previous project I had just completed a few days prior (a Todo List application), it gave me a sense of relief, and also made me feel happy and more confident about myself. 

shortcomingsTwo: Talking to my peers and mentor, they had told me that Asynchronous processes were one of the concepts that a lot of people usually struggle with in programming. I can understand why this is so, but I think the amount of time I spent reading documentation and conceptualizing JavaScript's runtime and event loop helped me comprehend Asynchronous processes just a bit more, it also helps that ES6 added Promises and async/await.
builtWith: ReactJS, React Router, Jest, CSS3, HTML5

projectOne: clockedOut
projectTwo: Meemo Boutique
projectOneLink: /projects/clocked-out
projectTwoLink: /projects/meemo-boutique

aboutLink: https://github.com/eltonbautista/odin-weather-app
projectsLink: https://eltonbautista.github.io/odin-weather-app/
---


<p>
   After reading through hundreds of pages of documentation about Asynchronous programming, I felt confident in how to deal with Asynchronous data and relay that information onto the DOM for the user to see. As with all of my projects so far, I took a similar approach when it came to planning and that was through thorough pseudo-coding. I broke the process of building this application into three steps: 
   <ol>
    <li>Engineer my functionalities for making calls to the several REST APIs by utilizing the fetch API in conjunction with promises and async/await.</li>
    <li>Collect the appropriate data from these calls through abstraction, and manipulate the data if necessary to increase its inheritablity and usability.</li>
    <li>Create my elements for the DOM and navigate through the several different interactions between my data, and the aforementioned elements to display the needed information onto the webpage.</li>
   </ol>
</p> 

<p>
  Once I finished planning I immediately went into action by creating different modules for each of my REST APIs. I believed that this was an appropriate approach for the task at hand as it allowed me to separate and store the necessary data from each of the resolved promises. Afterwards, I needed to display the data onto the webpage via DOM manipulation. During this stage the main thing I paid attention to was how to write extensible code. For this, I made sure to employ JavaScript's built-in object and array methods which allowed me to deal with any number of objects I needed to display thus increasing the scalability of my project. 
</p>





