class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    templateMaxMin(fn) {
        if (this.root) {
            let current = this.root;
            current = fn(current);
            return current.content;
        }
        return null;
    }

    //exibe o menor valor da arvore
    min() {
        return this.templateMaxMin((c) => {
            while (c.left) c = c.left
            return c
        });
    }

    //exibe o maior valor da arvore
    max() {
        return this.templateMaxMin((c) => {
            while (c.right) c = c.right
            return c;
        });
    }

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
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, fn) {
        if (node == null) return;
        fn(node.content);
        this.preOrderTraverseNode(node.left, fn);
        this.preOrderTraverseNode(node.right, fn);
    }

    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, fn) {
        if (node == null) return;
        this.postOrderTraverseNode(node.left, fn);
        this.postOrderTraverseNode(node.right, fn);
        fn(node.content)
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