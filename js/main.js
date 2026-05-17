import { header, footer } from './templates/template.js';
import { darkModeToggle } from './utils/darkMode.js';
import menu from './utils/menu.js';
import getSkills from './utils/skillsLists.js';
import getCheatsheets from './utils/cheatsheetsList.js';
import { getResources } from './utils/resourcesGenerator.js';
import getWeather from './utils/weather.js';

const headerContainer = document.getElementById('header');
const footerContainer = document.getElementById('footer');

headerContainer.innerHTML = header;
footerContainer.innerHTML = footer;


darkModeToggle();
menu();
getSkills();
getCheatsheets();
getResources();
getWeather();