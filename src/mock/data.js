import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Waldry Diaz | Desarrollador FullStack', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Conoce sobre mi y mis habilidades Tech', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, mi nombre es',
  name: 'Waldry Díaz',
  subtitle: 'Desarrollador de aplicaciones web y mobiles.',
  cta: 'Mas información',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'http://72.167.43.59/wdiaz/vitae.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '¿Quieres trabajar conmigo? Contactame!',
  btn: '¡Hablemos!',
  email: 'waldrymaster@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/WaldryDM',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '404',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '404',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/waldry',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
