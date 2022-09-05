const allMyText = {
  quoteOne:
    "Your potential truly is limitless. The only bounds that exist are the ones that we set on ourselves.",

  nounOne: "developer",
  descriptionOne:
    "I am a developer who emphasizes and prioritizes the importance of strong problem-solving skills and a solid understanding of programming related concepts. I am focused on creating scalable solutions, and delivering smooth user experiences paired with aesthetically pleasing designs. I dedicate myself to my craft by reinforcing my knowledge through daily studious and applicative efforts! Additionally, I maintain my understanding of modern technologies and tools by staying up to date with any relevant changes, and adapting my skill set accordingly.",

  nounTwo: "powerlifter",
  descriptionTwo:
    "141kg/310lb bench press at 70.5kg/155lb body-weight, this right here is my personal best (PB)! I enjoy pushing myself to the limits, and I am strongly believe that with effort and discipline we can achieve anything. Ask me about my squat and deadlift PBs!",

  nounThree: "hiker",
  descriptionThree:
    "Everything from preparing your hiking bag, or driving out to the mountains and enjoying the sceneries, and even all the way to the rigorous ascent up to the peak - I love it all.",
};

const projectInformation = [
  {
    title: "Groomify",
    description:
      "A Single Page Application (SPA) developed by 3 developers using agile practices. Groomify takes inspiration from Helcim (a local company) and is built with VueJS. ",
    alternate: "",
    lastClass: "",
    projectLink: "/projects/groomify",
  },
  {
    title: "clockedOut",
    description:
      "A LinkedIn clone application that focuses on the social aspects of gaming. A one-stop destination for creating lifetime companions.",
    alternate: "alternate",
    lastClass: "",
    projectLink: "/projects/clocked-out",
  },
  {
    title: "myWeather",
    description:
      "An application that enables users to check both the current weather of a city, as well as its weather for the week! Incorporates multiple API's to retrieve asynchronous weather data.",
    alternate: "",
    lastClass: "last-project",
    projectLink: "/projects/my-weather",
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
