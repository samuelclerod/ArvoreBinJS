class BinaryTree{
    constructor(){
        this.root = null;
    }

    min(){
        if(!this.root)
            return null;
        let i = this.root;
        while(i.left) 
            i=i.left
        return i.content;
    }

    max(){
        if(!this.root)
            return null;
        let i = this.root;
        while(i.right) 
            i=i.right
        return i.content;  
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

    preOrderTraverseNode(node, callback){
        if(node!==null){
            callback(node.content);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback){
        if(node!==null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.content);
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
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
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, value){
        if(node===null)
            return null;
        if(value>node.content){
            node.right = this.removeNode(node.right, value);
        }else if(value<node.content){
            node.left = this.removeNode(node.left, value);
        }else{
            if(node.right===node.left){
                return null;
            }else if(node.right===null){
                return node.left;
            }else if(node.left===null){
                return node.right;
            }else{
                let i=node.right;
                while(i.left) i=i.left;
                i.left = node.left;
                return node.right;
            }
        }
    }

    heigth(){
        return this.heigthNode(this.root)
    }
    heigthNode(node){
        if(node==null) return -1
        let l = this.heigthNode(node.left),
            r = this.heigthNode(node.right);
        if(l>r)
            return l+1;
        else
            return r+1
    }


    size(){
        return this.sizeNode(this.root);
    }
    sizeNode(node){
        if(node===null) return 0;
        return 1 + this.sizeNode(node.left)+this.sizeNode(node.right); 
    }

}