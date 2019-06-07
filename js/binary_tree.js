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
        this.inOrder(this.root, callback);
    }
    inOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.inOrder(rootNode.left, callback);
        callback(rootNode.content);
        this.inOrder(rootNode.right, callback);
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback){
        this.preOrder(this.root, callback);
    }
    preOrder(rootNode, callback) {
        if (rootNode == null) return;
        callback(rootNode.content);
        this.preOrder(rootNode.left, callback);
        this.preOrder(rootNode.right, callback);
    }
    
    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
            this.posOrder(this.root, callback);
    }
    posOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.posOrder(rootNode.left, callback);
        this.posOrder(rootNode.right, callback);
        callback(rootNode.content);
    }
    
    //remove um elemento existente na arvore o retorna
    remove(value){
        this.root = this.removeNode(this.root, value);
    }
    removeNode(rootNode, value){
        if(rootNode==null) 
            return null;
        if(value==rootNode.content){
            if(rootNode.left===null && rootNode.right===null){// é uma folha - Grau 0
                rootNode = null;
            } else if (rootNode.right == null) { // tem filho na esqueda - Grau 1
                rootNode = rootNode.left;
            } else if (rootNode.left == null) { // só tem filho na direita - Grau 1
                rootNode = rootNode.right;
            } else{ // tem filho nos dois lados - Grau 2
                let i = rootNode.right;
                while(i.left!=null){
                    i = i.left;
                }
                i.left = rootNode.left;
                rootNode = rootNode.right;
            }
        }else if(value>rootNode.content){
            rootNode.right = this.removeNode(rootNode.right, value);
        }else{
            rootNode.left = this.removeNode(rootNode.left, value);
        }
        return rootNode;
    }

    //exibe a altura da arvore
    heigth(){
        return this.heigthNode(this.root);        
    }
    heigthNode(node){
        if(node==null)
            return -1;
        let leftHeigth = this.heigthNode(node.left),
            rightHeigth = this.heigthNode(node.right);
        if(leftHeigth > rightHeigth){
            return 1 + leftHeigth;
        }else{
            return 1 + rightHeigth;
        } 
    }

    // informa quantos nós existem na arvore
    size(){
        return this.sumNodes(this.root);
    }
    sumNodes(node){
        if(node==null) 
            return 0;
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right);
    }

    //exibe o menor valor da arvore
    min() {
        let node = this.root;
        if (node == null) return null;
        while (node.left != null)
            node = node.left;
        return node.content;
    }

    //exibe o maior valor da arvore
    max() {
        let node = this.root;
        if (node == null) return null;
        while (node.right != null)
            node = node.right;
        return node.content;
    }
}