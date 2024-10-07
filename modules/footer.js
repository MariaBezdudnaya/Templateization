import Element  from "../constructor/Element.js";

// const footer = new Element('div', 'footer', [
//   new Element('a', 'footer-link', 'Контакты').get(),
//   new Element('a', 'footer-link', 'О нас').get(),
//   new Element('p', 'footer-text', '© 2024. Все права защищены').get(), 
// ]).get(); 

const footerContent = '© 2024. Все права защищены | Контакты: info@example.com';
const footer = new Element('div', 'footer', footerContent).get(); // создаем компонент footer

export default footer;