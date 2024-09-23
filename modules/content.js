import Element from "../constructor/Element.js";
import cards from "./cards.js";

const content = new Element('div', 'content', cards).get();

export default content;