import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kohl | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Kohl Peterson',
  subtitle: "and I'm a software developer.",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a 4th year B.Sc. (Computer Science and Statistics) student at the University of British Columbia with an expected graduation of April 2022. I also earned a B.BA. (Finance and Economics) from the University of Regina in 2017 and graduated with distinction.',
  paragraphTwo:
    'I worked in the finance industry in various roles for ~5 years, before discovering that creating and building technology that solves business problems is what I love to do. I hope to leverage my experience as a consumer of software in various other roles to help create software solutions that solve real world problems.',
  paragraphThree:
    'I enjoy the outdoors - I hike a lot with my dog Mabel during the summer and am a (still pretty bad) snowboarder during the winter. I am also an avid board gamer and, at the time of writing this, am currently obsessed with Gloomhaven.',
  resume: 'resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Prolific',
    info:
      'Powerful task organizer with an emphasis on functional design and empowering individual productivity.',
    info2:
      'A task organizer app I am currently developing built with MongoDB, React, Express, Node and deployed on Heroku. Some key features I implemented were: OAuth 2 login with Private Routes, CRUD task workflows, Bullet List display with inline editing/updating and Sort and Multi-Filter.',
    url: 'https://prolific-app.herokuapp.com/',
    repo: 'https://github.com/kohlglenn/prolific', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vr.jpg',
    title: 'SAP AR-VR Experience (SAP d-shop)',
    info:
      'I worked as a software developer in a team of 7 to create an AR/VR app to showcase the SAP Vancouver office to the public.',
    info2:
      'The technologies I worked with include A-Frame (and 3rd party libraries), Cloud Foundry, Node, HTML, Javascript, as well as TinkerCAD for the creation of 3D models. I was responsible for the navigation menu, templatizing the rooms, the home room, the interactive components of the SAP engagement room and more.',
    url: 'https://ar-office-tour-fall2020.cfapps.sap.hana.ondemand.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-recycle.png',
    title: 'Smart Recycle',
    info:
      'Making recycling easier for consumers by leveraging AI to identify what is recyclable and how to sort it.',
    info2:
      'I worked in a team of 4 and was responsible for reverse engineering the network requests from the RecycleBC website, the camera portion of the front-end (React) and the intergration our different back-end pieces on our server (Node.js).',
    url: 'https://smartrecycleapp.com/',
    repo: 'https://github.com/placemedas/Smart-Recycle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'python.jpg',
    title: 'OCR Live Demo',
    info:
      'Draw numbers on a canvas and have a convolution neural network predict the result in real time.',
    info2:
      'An python-native interactive program where you can draw a number on a canvas and it is fed into a Convolutional Neural Network (CNN) built with Tensorflow to get a real-time prediction of the number you are drawing.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kohlglenn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kohl-peterson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kohlglenn',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
