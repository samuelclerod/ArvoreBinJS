class BinaryTree {
  // inicializa a raiz como nula
  constructor() {
    this.root = null;
  }

  //insere o elemento da arvores
  insert(element) {
    if (validations.some(fn => fn(element))) return;
    this.root = this._insert(this.root, element)
  }

  _insert(rootNode, value) {
    if (rootNode === null) {
      rootNode = new Node(value);
    } else if (value < rootNode.content) {
      rootNode.left = this._insert(rootNode.left, value);
    } else {
      rootNode.right = this._insert(rootNode.right, value);
    }
    return rootNode;
  }

  //retorna true se o valor já existe na arvore
  search(value) {
    return this._search(this.root, value);
  }

  _search(rootNode, value) {
    if (!rootNode) {
      return false;
    }
    if (rootNode.content === value) {
      return true;
    } else if (value < rootNode.content) {
      return this._search(rootNode.left, value);
    } else {
      return this._search(rootNode.right, value);
    }
  }

  //executa a função callback para cada nó, em ordem
  inOrderTraverse(callback) {
    this._inOrderTraverse(this.root, callback)
  }

  _inOrderTraverse(rootNode, cb) {
    if (rootNode === null) return;
    this._inOrderTraverse(rootNode.left, cb);
    cb(rootNode.content);
    this._inOrderTraverse(rootNode.right, cb);
  }

  //executa a função callback para cada nó, em pré-ordem
  preOrderTraverse(callback) { }

  //executa a função callback para cada nó, em pós-ordem
  postOrderTraverse(callback) { }

  //remove um elemento existente na arvore o retorna
  remove(value) { }

  //exibe a altura da arvore
  height() { }

  // informa quantos nós existem na arvore
  size() { }

  //exibe o menor valor da arvore
  min() { }

  //exibe o maior valor da arvore
  max() { }
}



var validations = [
  isNaN,
  (n) => !isFinite(n),
  (n) => n < 0
]
