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
    inOrderTraverse(callback){
        inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(root, callback){
        if(root!==null){
            this.inOrderTraverseNode(root.left, callback);
            callback(root.content);
            this.inOrderTraverseNode(root.right, callback);
        }
    }
}