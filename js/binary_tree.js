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
        let node = new node(element);
        if(this.root===null){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }
    }

    inOrderTraverse(callback){
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