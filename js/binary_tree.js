class BinaryTree {
    //DONE  inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //DONE insere o elemento da arvores
    insert(element) {
        this.root = this.recursiveInsertion(this.root, element);
    }
    recursiveInsertion(node, element) {
        if (node === null) {
            node = new Node(element);
        } else if (element < node.content) {
            node.left = this.recursiveInsertion(node.left, element);
        } else {
            node.right = this.recursiveInsertion(node.right, element);
        }
        return node
    }

    //TODO executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.inOrderRecursive(this.root, callback)
    }

    //left content right
    inOrderRecursive(node, cb) {
        if (!node) return;
        this.inOrderRecursive(node.left, cb);
        cb(node.content);
        this.inOrderRecursive(node.right, cb)
    }

    //TODO executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
    }

    //TODO executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
    }

    //TODO retorna true se o valor já existe na arvore
    search(value) {
        return this.recursiveSearch(this.root, value);
    }

    recursiveSearch(node, value) {
        if (node === null)
            return false;
        if (node.content === value)
            return true;
        if (value < node.content)
            return this.recursiveSearch(node.left, value);
        return this.recursiveSearch(node.right, value)
    }

    //TODO remove um elemento existente na arvore o retorna
    remove(value) {
    }

    //TODO exibe o menor valor da arvore
    min() {
    }

    //TODO exibe o maior valor da arvore
    max() {
    }

    //TODO exibe a altura da arvore
    heigth() {
    }

    //TODO informa quantos nós existem na arvore
    size() {
    }

}