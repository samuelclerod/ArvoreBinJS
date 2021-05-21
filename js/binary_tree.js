class BinaryTree {
    //DONE  inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //DONE insere o elemento da arvores
    insert(element) {
        this.root = this.recursiveInsertion(this.root, element);
    }
    recursiveInsertion(node, element) {
        if (node === null) {
            node = new Node(element);
        } else if (element < node.content) {
            node.left = this.recursiveInsertion(node.left, element);
        } else {
            node.right = this.recursiveInsertion(node.right, element);
        }
        return node
    }

    //DONE executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.inOrderRecursive(this.root, callback)
    }
    inOrderRecursive(node, cb) {
        if (!node) return;
        this.inOrderRecursive(node.left, cb);
        cb(node.content);
        this.inOrderRecursive(node.right, cb)
    }

    //DONE executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
        this.preOrderRecursive(this.root, callback)
    }
    preOrderRecursive(node, cb) {
        if (!node) return;
        cb(node.content);
        this.preOrderRecursive(node.left, cb);
        this.preOrderRecursive(node.right, cb);
    }

    //DONE executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
        this.postOrderRecursive(this.root, callback)
    }
    postOrderRecursive(node, cb) {
        if (!node) return;
        this.postOrderRecursive(node.left, cb);
        this.postOrderRecursive(node.right, cb);
        cb(node.content)
    }

    //DONE retorna true se o valor já existe na arvore
    search(value) {
        return this.recursiveSearch(this.root, value);
    }

    recursiveSearch(node, value) {
        if (node === null)
            return false;
        if (node.content === value)
            return true;
        if (value < node.content)
            return this.recursiveSearch(node.left, value);
        return this.recursiveSearch(node.right, value)
    }

    //DOING remove um elemento existente na arvore o retorna
    remove(value) {
        this.root = this.removeRecursive(this.root, value);
    }

    removeRecursive(node, value) {
        if (!node) throw new Error("Nó não existe");
        if (node.content === value) {
            if (node.left === node.right) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left
            } else {
                let aux = node.right;
                while (aux.left) {
                    aux = aux.left
                }
                aux.left = node.left
                node = node.right;
            }
        } else if (value < node.content) {
            node.left = this.removeRecursive(node.left, value);
        } else {
            node.right = this.removeRecursive(node.right, value);
        }

        return node;
    }


    //TODO exibe o menor valor da arvore
    min() {
        let selected = this.root;
        while (selected.left) {
            selected = selected.left;
        }
        return selected.content;
    }

    //TODO exibe o maior valor da arvore
    max() {
        let selected = this.root;
        while (selected.right) {
            selected = selected.right;
        }
        return selected.content;
    }

    //TODO exibe a altura da arvore
    heigth() {
        return this.root;
    }

    recursiveHeigth(node) {
        if (!node) return -1;
        const left = this.recursiveHeigth(node.left);
        const right = this.recursiveHeigth(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    //TODO informa quantos nós existem na arvore
    size() {
        let counter = 0;
        this.inOrderTraverse((value) => {
            counter++;
        })
        return counter;
    }

}