import Element from "../constructor/Element.js"; 

const largeCardData = [ // массив с карточками
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
];

const smallCardData = [ // массив с карточками
  'Same card 1',
  'Same card 2',
  'Same card 3',
  'Same card 4',
  'Same card 5',
];

const largeCard = largeCardData.map(el => new Element('div', 'large-card', el).get()); // большие карточки
const smallCard = smallCardData.map(el => new Element('div', 'small-card', el).get()); // маленькие карточки

const largeCardsColumn = new Element('div', 'large-cards_column', largeCard).get(); // колонка с большими карточками
const smallCardsColumn = new Element('div', 'small-cards_column', smallCard).get(); // колонка с маленькими карточками

const content = new Element('div', 'content', [largeCardsColumn, smallCardsColumn]).get(); // создание общего контента

export default content;