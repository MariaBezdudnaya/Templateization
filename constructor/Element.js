class Element {
  constructor(tag, classes, children = '') {
    this.tag = tag;
    this.classes = classes;
    this.children = children;

    this.init();
    this.appendChildren();
  }

  init() {
    const element = document.createElement(this.tag);
    element.classList.add(this.classes);
    
    this.element = element;
  }

  appendChildren() {
    if (typeof this.children === 'string') { // если дочерний элемент является строкой
      this.element.textContent = this.children; // то добавляем его в компонент
    } else {
      this.children.forEach(el => { // иначе перебираем массив дочерних элементов
        this.element.append(el); // и вмонтируем их в компонент
      });
    }
  }

  get() {
    return this.element; // возвращает элемент в виде dom-узла
  }

  append(element) {
    this.element.append(element); // добавляет элемент внутрь компонента
  }

  remove() {
    this.element.remove(); // удаляет компоненту элемент из дерева
  }
}

export default Element;