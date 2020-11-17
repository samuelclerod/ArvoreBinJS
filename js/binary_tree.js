class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //exibe o menor valor da arvore
    min() {
    }

    //exibe o maior valor da arvore
    max() {
    }

    //insere o elemento da arvores
    insert(element) {
        this.root = this.recursiveInsertion(element, this.root)
    }

    recursiveInsertion(value, node) {
        if (!node) {
            return new Node(value);
        }
        if (value < node.content) {
            node.left = this.recursiveInsertion(value, node.left);
        } else {
            node.right = this.recursiveInsertion(value, node.right);
        }
        return node;
    }

    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.recursiveInOrderTraverse(callback, this.root);
    }

    recursiveInOrderTraverse(callback, node) {
        if (!node) return;
        this.recursiveInOrderTraverse(callback, node.left);
        callback(node.content);
        this.recursiveInOrderTraverse(callback, node.right);
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
    }

    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
    }

    //retorna true se o valor já existe na arvore
    search(value) {
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