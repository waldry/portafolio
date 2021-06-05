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
    img: '3.jpeg',
    title: 'Centro De Caja',
    info: 'El Centro de caja es una aplicacion utilizando el patron MVC hecho en C# y WindowsForm',
    info2:
      'Software para instituciones financieras con una conexion Cliente-Servidor el cual permite gestionar los depositos, retiros, transacciones y reportes que la entidad requiera para facilitar y automatizar los procesos internos de esta.',
    url: 'http://www.dasoft.com.do/',
    repo: 'https://github.com/waldry/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2.png',
    title: 'Dashboard DGTextiles',
    info: 'Centro Administrativo para DGTextiles hecho utilizando React,React-To-Print,Redux,Bootstrap y CoreUI.',
    info2:
      'Herramienta de administracion del modelo negocio textil con capacidad de impresion en dispositivos mobiles y de gestionar el flujo de informacion necesario para agilizar las entradas en un parque industrial.',
    url: 'http://dg.dsf.com.do/#/login',
    repo: 'https://github.com/waldry/', // if no repo, the button will not show up
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
