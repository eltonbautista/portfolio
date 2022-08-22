const allMyText = {
  quoteOne: "Your potential truly is limitless. The only bounds that exist are the ones that we set on ourselves.",

  nounOne: "developer",
  descriptionOne: "I get lost in writing code! As I sit on my chair and type away at the keyboard all I can think about is what I'm building, how to build it, and what to build next. I love learning new technologies, or new patterns, or new ideas. I love reading other people's code, trying to figure out how to improve on it, and if I can't see how I recognize that as an opportunity to learn. I love teaching others equally as much as I love learning from them. I love planning, visualizing, designing, building, and finally, making it come to life. I love struggling through my code. I love this. I love it all.",

  nounTwo: "powerlifter",
  descriptionTwo: "141kg/310lb bench press at 70.5kg/155lb body-weight, this right here is my personal best (PB)! I enjoy pushing myself to the limits, and I am strongly believe that with effort and discipline we can achieve anything. Ask me about my squat and deadlift PBs!",

  nounThree: "hiker",
  descriptionThree: "Everything from preparing your hiking bag, or driving out to the mountains and enjoying the sceneries, and even all the way to the rigorous ascent up to the peak - I love it all.",

};

const projectInformation = [
  {
    title: "Groomify",
    description: "Groomify is a Single Page Application (SPA) built with Vue.js. Groomify takes a great deal of inspiration from Helcim (a local company).",
    alternate: '',
    lastClass: '',
    projectLink: '/projects/groomify'
  },
  {
    title: "clockedOut",
    description: "clockedOut is a LinkedIn clone application that focuses on the social aspects of gaming. It is a one-stop destination for creating lifetime companions, and remembering our childhood nostalgia.",
    alternate: 'alternate',
    lastClass: '',
    projectLink: '/projects/clocked-out'
  }, {
    title: "myWeather",
    description: "myWeather is an application designed to provide users the ability to check both the current weather of a city, as well as its weather for the week! Yes, it's basically a weather forecast app but created by yours truly! ",
    alternate: '',
    lastClass: 'last-project',
    projectLink: '/projects/my-weather'
  },
];

const determineScrollDirection = (windowScroll, oldScroll) => {
  if (windowScroll > oldScroll) {
    return "down";
  } else {
    return "up";
  }
};

export { allMyText, projectInformation, determineScrollDirection };


// {
//   title: "Meemo Boutique",
//   description: "Meemo Boutique is a single-page ecommerce webpage application that boasts a vintage, but modern neon aesthetic that is focused on uniting both fashion lovers with old souls, and newcomers who aren't afraid to stand out and dare to be different.",
//   alternate: '',
//   lastClass: 'last-project',
//   projectLink: '/projects/meemo-boutique'
// }