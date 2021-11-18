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
  preOrderTraverse(callback) {
    this._preOrderTraverse(this.root, callback)
  }
  _preOrderTraverse(rootNode, cb) {
    if (!rootNode) return;
    cb(rootNode.content);
    this._preOrderTraverse(rootNode.left, cb);
    this._preOrderTraverse(rootNode.right, cb);
  }

  //executa a função callback para cada nó, em pós-ordem
  postOrderTraverse(callback) {
    this._postOrderTraverse(this.root, callback)
  }
  _postOrderTraverse(rootNode, cb) {
    if (!rootNode) return;
    this._postOrderTraverse(rootNode.left, cb);
    this._postOrderTraverse(rootNode.right, cb);
    cb(rootNode.content);
  }

  //remove um elemento existente na arvore o retorna
  remove(value) {
    this.root = this._remove(this.root, value)
  }
  _remove(node, value) {
    if (!node) return;
    if (node.content === value) {
      if (node.left === node.right) {
        return null
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const newRoot = node.right;
        const current = newRoot;
        while (current.left != null) {
          current = current.left
        }
        current.left = node.left;
        node.left = node.right = null;
        return newRoot;
      }
    } else if (value < node.content) {
      node.left = this._remove(node.left, value);
    } else {
      node.right = this._remove(node.right, value)
    }
    return node;
  }

  //exibe a altura da arvore
  height() { }

  // informa quantos nós existem na arvore
  size() {
    let counter = 0;
    this.preOrderTraverse(value => counter++)
    return counter;
  }

  //exibe o menor valor da arvore
  min() {
    if (!this.root) return;
    let current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.content;

  }

  //exibe o maior valor da arvore
  max() {
    if (!this.root) return;
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.content;
  }
}



var validations = [
  isNaN,
  (n) => !isFinite(n),
  (n) => n < 0
]
