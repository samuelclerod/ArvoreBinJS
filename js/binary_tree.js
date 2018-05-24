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
        if(this.root)
            return this.minNode(this.root).content
        return null;
    }

    minNode(node){
        if(node.left==null)
            return node;
        return this.minNode(node.left);
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

    remove(value){
        this.root = this.removeNode(this.root, value)
    }
    removeNode(node, value){
        if(node==null) 
            return null;
        if(value>node.content){
            node.right = this.removeNode(node.right, value);
        }else if(value<node.content){
            node.left = this.removeNode(node.left, value);
        }else{
            if(node.left==node.right){//nó folha
                node=null;
            }else if(node.right==null){//tem nó somente da esquerda
                node = node.left;
            }else if(node.left==null){//tem nó somente na direita
                node = node.right;
            }else{// tem nó nas duas sub-arvores
                this.minNode(node.right).left = node.left;
                node = node.right;
            }
        }
        return node;
    }

    heigth(){
        return this.heigthNode(this.root);
    }
    heigthNode(node){
        if(node==null) return -1;
        let l=this.heigthNode(node.left),
            r=this.heigthNode(node.right);
        if (l>r)
            return l+1;
        else
            return r+1;
    }

    size(){
        return this.sizeNode(this.root);
    }
    sizeNode(node){
        if(node==null) return 0;
        return 1+this.sizeNode(node.left)+this.sizeNode(node.right);
    }

}