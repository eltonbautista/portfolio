const allMyText = {
  quoteOne: "Your potential truly is limitless. The only bounds that exist are the ones that we set on ourselves.",

  nounOne: "developer",
  descriptionOne: "Shorter description for developer",

  nounTwo: "powerlifter",
  descriptionTwo: "141kg/310lb bench press at 70.5kg/155lb body-weight, this right here is my personal best! I enjoy pushing myself to the limits. No day has passed where I thought that my current state was good enough. ",

  nounThree: "hiker",
  descriptionThree: "Everything from preparing your hiking bag, or driving out to the mountains and enjoying the sceneries, and even all the way to the rigorous ascent up to the peak - I love it all.",

};

const projectInformation = [{
  description: "clockedOut is a LinkedIn clone application that focuses on the social aspects of gaming. It is a one-stop destination for creating lifetime companions, and remembering our childhood nostalgia.",
  problem: "Simulate a popular industry-sized application that utilizes a NoSQL database. Additionally, I wanted to further my understanding on the intricacies of UI/UX testing, how to deal with higher quantities of REST API calls, and finally, familiarize myself with the state management model. ",
  solution: "Instead of JavaScript, I decided to use TypeScript instead due to its strongly typed nature. This allowed me to reduce the bugs I encountered, create ease of access for anybody reading my code, and most importantly increase the scalability of my application which is important for addressing my main problem. I utilized Jest for testing due to its compatability with React testing library and asynchronous functionalities. Firebase was my choice for a NoSQL database because of its reliability, rich documentation, and ability to persist data locally and offline which would provide my users a responsive experience. I opted on using React's built-in Context API due to its reliability, built-in support, and minimalistic setup.",
  shortcomings: "After my initial planning phase and working on the application for a few days I realized that I had severely miscalculated the scale of the application. Initially, my goal for clockedOut was to have all of the functionalities and similar design of LinkedIn. Instead I focused on clockedOut being a CRUD application which will later implement messaging and the ability to follow and view others' posts.",
  builtWith: "TypeScript, ReactJS, Firebase, React Router, Jest, Styled-Components, CSS3, HTML5",
}, {}, {}];

export { allMyText, projectInformation };