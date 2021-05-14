class BinaryTree {
    //DONE  inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //DONE insere o elemento da arvores
    insert(element) {
        this.root = this.recursive_insertion(this.root, element);
    }
    recursive_insertion(node, element) {
        if (node === null) {
            node = new Node(element);
        } else if (element < node.content) {
            node.left = this.recursive_insertion(node.left, element);
        } else {
            node.right = this.recursive_insertion(node.right, element);
        }
        return node
    }



    //TODO executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
    }

    //TODO executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
    }

    //TODO executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
    }

    //TODO retorna true se o valor já existe na arvore
    search(value) {
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