class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null
    }

    //exibe o menor valor da arvore
    min() {
    }

    //exibe o maior valor da arvore
    max() {
    }

    //insere o elemento da arvores
    insert(element) {
        this.root = this.insertNode(this.root, element)
    }

    insertNode(rootNode, element) {
        if (rootNode == null)
            return new Node(element)
        if (element > rootNode.content)
            rootNode.right = this.insertNode(rootNode.right, element)
        else
            rootNode.left = this.insertNode(rootNode.left, element)
        return rootNode
    }

    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.inOrderVisitor(this.root, callback)
    }

    inOrderVisitor(node, callback) {
        if (node == null)
            return
        this.inOrderVisitor(node.left, callback)
        callback(node.content)
        this.inOrderVisitor(node.right, callback)
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