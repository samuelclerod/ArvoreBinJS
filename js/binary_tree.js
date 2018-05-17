class BinaryTree{
    constructor(){
        this.root=null;
    }

    insert(element){
        let node = new Node(element);
        if(this.root===null){
            this.root=node;
        }else{
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node){
        if(node.content<root.content){
            if(root.left===null){
                root.left=node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            if(root.right===null){
                root.right=node;
            }else{
                this.insertNode(root.right, node);
            }
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

    min(){
        let node = this.root;
        if(node){
            while(node.left) {
                node=node.left;
            }
            return node.content;
        }
        return null;
    }

    max(){
        let node = this.root;
        if(node){
            while(node.right) {
                node=node.right;
            }
            return node.content;
        }
        return null;
    }

    search(value){
        return this.searchNode(this.root, value);
    }
    searchNode(node, value){
        if(node==null){
            return false;
        }
        if(value>node.content){
            return this.searchNode(node.right, value);
        }else if(value<node.content){
            return this.searchNode(node.left, value);
        }else{
            return true;
        }
    }

}