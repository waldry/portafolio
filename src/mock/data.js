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
  subtitle: 'Desarrollador de aplicaciones web y movíles.',
  cta: 'Mas información',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Apasionado por la programación, trabajador, entusiasta y sobre todo un profesional responsable dedicado a dar lo mejor para entregar productos digitales de la más alta calidad posible.',
  paragraphTwo:
    'Con tecnologías como React, React-Native, Gatsby, NodeJS, PostgreSQL, MongoDB, C#, MVC y Windows Form cuento con una amplia gama de herramientas listas para automatizar y/o aumentar el impacto de tu negocio.',
  paragraphThree:
    'Telefonía Ip, infraestructura de la información y la creación de software es lo que me define como profesional, colocando como el limite la imaginación y siempre poniendo todo el empeño en cada proyecto.',
  resume: 'http://wdiaz.dsf.com.do/vitae.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '2.png',
    title: 'Dashboard DGTextiles',
    info: 'Centro Administrativo para DGTextiles hecho utilizando React,React-To-Print,Redux,Bootstrap y CoreUI.',
    info2:
      'Herramienta de administración del modelo negocio textil con capacidad de impresión en dispositivos móviles y de gestionar el flujo de información necesario para agilizar las entradas en un parque industrial.',
    url: 'http://dg.dsf.com.do/#/login',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3.png',
    title: 'CoopQuisqueya WebSite',
    info: 'WebSite hecho para CoopQuisqueya utilizando VanillaJS, Boostrap y HTML',
    info2:
      'Landing Page para institución financiera de cooperación socioeconómica. Cooperativa de ahorros créditos y servicios múltiples Quisqueya.',
    url: 'https://www.coopquisqueya.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '4.png',
    title: 'CoopQuisqueya Virtual',
    info: 'Utilizándose como NetBanking para CoopQuisqueya, esta herramienta fue hecha en ReactNative.',
    info2:
      'Software que facilita la interacción de los clientes con la cooperativa agilizando procesos y evitando tener que ir físicamente a la institución financiera. Fui participe del despliegue de esta app a las tiendas correspondientes.',
    url: 'https://youtu.be/OFHaegnqY4o',
    repo: '', // if no repo, the button will not show up
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
