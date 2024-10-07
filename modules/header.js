import Element from "../constructor/Element.js";
import content from "./content.js";

const logo = new Element('img', 'logo').get();
logo.src = './img/logo.png';

const search = new Element('input', 'header-search').get();
search.placeholder = 'Введите поисковый запрос..';

search.oninput = () => {
  const searchText = search.value.toLowerCase();
  const searchResults = content.cards.filter(card => {
    return card.element.querySelector('.card-title').textContent.toLowerCase().includes(searchText);
  });

  content.updateContent(searchResults);
  console.log(searchResults)
};

const button = new Element('button', 'header-button').get();
button.textContent = 'Поиск';

const header = new Element('div', 'header', [logo, search, button]).get();
export default header;
