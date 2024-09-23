import Element  from "../constructor/Element.js";

const imageData = [
  '../img/card1.png',
  '../img/card2.png',
  '../img/card3.png',
  '../img/card4.png',
  '../img/card5.png',
  '../img/card6.png',
  '../img/card7.png',
  '../img/card8.png',
  '../img/card9.png',
  '../img/card10.png',
];

const titleData = [
  'Гарнитуры TWS стерео XIAOMI REDMI BUDS 4 LITE BLACK',
  'Наушники TWS Xiaomi Redmi Buds 4 Lite черный',
  'Гарнитуры TWS стерео HONOR CHOICE EARBUDS X5E WHITE',
  'Наушники Creative Zen Air Pro, Bluetooth, вкладыши, белый',
  'Наушники True Wireless realme Buds Air 5 Pro Black',
  'Гарнитуры TWS стерео JBL WAVE BUDS ЧЕРНЫЙ',
  'Гарнитуры TWS стерео HONOR CHOICE EARBUDS X ЧЕРНЫЙ',
  'Наушники TWS Xiaomi Redmi Buds 4 Pro черный',
  'Наушники Samsung Galaxy Buds 2 Pro, Bluetooth, серый',
  'Наушники True Wireless HUAWEI Freebuds 5i Nebula Black (T0014)',
]

const shopData = [
  'RBT',
  'DNS',
  'RBT',
  'Ситилинк',
  'MVideo',
  'RBT',
  'DNS',
  'DNS',
  'Ситилинк',
  'MVideo',
]

const priceData = [
  '1790 ₽',
  '1899 ₽',
  '2490 ₽',
  '8840 ₽',
  '8999 ₽',
  '5199 ₽',
  '2990 ₽',
  '6999 ₽',
  '13990 ₽',
  '5499 ₽',
]

const cards = [];

for (let i = 0; i < imageData.length; i++) {
  const imgElement = new Element('img', 'card-image').get();
  imgElement.src = imageData[i];

  const titleElement = new Element('div', 'card-title', titleData[i]).get();
  const shopElement = new Element('div', 'card-shop', shopData[i]).get();
  const priceElement = new Element('div', 'card-price', priceData[i]).get();

  const cardText = new Element('div', 'card-text', [titleElement, shopElement, priceElement]).get();
  const cardElement = new Element('div', 'card', [imgElement, cardText]).get();
  cards.push(cardElement);
}

export default cards;