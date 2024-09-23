// sidebar.js
import Element from "../constructor/Element.js";

const themeButton = new Element('input', 'theme-button').get();
themeButton.setAttribute('type', 'radio');
themeButton.setAttribute('id', 'theme-toggle');

themeButton.onchange = () => {
  document.body.classList.toggle('dark-theme');
};

const themeText = new Element('label', 'theme-text', 'Сменить тему').get();
themeText.htmlFor = themeButton.id; // Связываем label с радио-кнопкой

const switchTheme = new Element('div', 'switchTheme', [themeButton, themeText]).get(); 

const sidebar = new Element('div', 'sidebar', 'switchTheme');

export default sidebar;
