class Wrapper { // принимает корневой элемент, который монтирует страницу и список компонентов, котрые монтируются
  constructor(rootId, children = []) { // rootId - id корневого элемента, children - массив дочерних элементов
    this.rootId = rootId;
    this.children = children;

    this.init();
  }

  init() {
    const root = document.querySelector(this.rootId);

    if(!root) {
      throw Error('Root element not exist');
    }

    this.root = root;

    this.children.forEach(el => {
      this.root.append(el.get());
    });
  }
}

export default Wrapper;