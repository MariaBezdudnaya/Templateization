import Wrapper from './constructor/Wrapper.js';
import Element from './constructor/Element.js';
import content from './modules/content.js';
import footer from './modules/footer.js';
import header from './modules/header.js';
import sidebar from './modules/sidebar.js';

const mainContainer = new Element('div', 'main-container', [header, content, footer]); 

new Wrapper('#root', [mainContainer, sidebar]);