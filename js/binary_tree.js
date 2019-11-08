class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //exibe o menor valor da arvore
    min() { }

    //exibe o maior valor da arvore
    max() { }

    //insere o elemento da arvores
    insert(element) {
        this.root = this.insertNode(this.root, element);
    }

    insertNode(node, element) {
        if (node == null)
            return new Node(element);
        if (element < node.content)
            node.left = this.insertNode(node.left, element);
        else
            node.right = this.insertNode(node.right, element);
        return node;
    }

    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node == null) return;
        this.inOrderTraverseNode(node.left, callback);
        callback(node.content);
        this.inOrderTraverseNode(node.right, callback);
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
    }

    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
    }

    //retorna true se o valor já existe na arvore
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node == null)
            return false;
        if (node.content == value)
            return true;
        if (value < node.content)
            return this.searchNode(node.left, value);
        else
            return this.searchNode(node.right, value);
    }

    //remove um elemento existente na arvore o retorna
    remove(value) {
    }

    //exibe a altura da arvore
    heigth() {
    }

    // informa quantos nós existem na arvore
    size() {
    }

}