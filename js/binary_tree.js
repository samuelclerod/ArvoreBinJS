class BinaryTree{
    // inicializa a raiz como nula
    constructor(){
        this.root = null;
    }

    //insere o elemento da arvores
    insert(element){
        this.root = this.insertNode(this.root, element);
    }
    insertNode(rootNode, value){
        if (rootNode==null) {
            return new Node(value);
        }
        if(value>rootNode.content){
            rootNode.right = this.insertNode(rootNode.right, value);
        }else{
            rootNode.left = this.insertNode(rootNode.left, value);
        }
        return rootNode;
    }

    //retorna true se o valor já existe na arvore
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(rootNode, value){
        if (rootNode == null) return false;
        if (rootNode.content == value) return true;
        if (value > rootNode.content)
            return this.searchNode(rootNode.right, value);
        else
            return this.searchNode(rootNode.left, value);
    }


    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback){
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback){
    }
    
    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback){
    }
    
    //remove um elemento existente na arvore o retorna
    remove(value){
    }

    //exibe a altura da arvore
    heigth(){
    }

    // informa quantos nós existem na arvore
    size(){
    }

    //exibe o menor valor da arvore
    min() {}

    //exibe o maior valor da arvore
    max() {}
}