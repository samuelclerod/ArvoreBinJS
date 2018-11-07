class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertNode(root, node){
        if(node.content<root.content){
            //inserir na esquerda
            if(root.left===null){
                root.left=node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            //inserir na direita
            if(root.right===null){
                root.right=node;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }

    insert(element){
        let node = new Node(element);
        if(this.root===null){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }
    }

    inOrderTraverseNode(node, callback){
        if(node!==null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.content);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverse(callback){
    }

    postOrderTraverse(callback){
    }

    search(value){
        return this.searchNode(this.root, value);
    }
    searchNode(root, value){
        if(root===null)
            return false;
        if(value>root.content){
            return this.searchNode(root.right, value);
        }else if(value<root.content){
            return this.searchNode(root.left, value);
        }else{
            return true;
        }
    }

    remove(value){
    }

    heigth(){
    }

    size(){
    }

}