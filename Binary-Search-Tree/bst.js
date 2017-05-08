function BinarySearchTree() {
    this.root = null
}

BinarySearchTree.prototype.push = function(val) {

    //Root is not present, the tree is empty
    if (!this.root) {
        this.root = {
            left: null,
            val: val,
            right: null
        }
    } else {

        //Traverse the tree, depending upon the val 
        var rootPointer = this.root
        while (rootPointer) {
            if (val > rootPointer.val) {
                if (rootPointer.right) {
                    rootPointer = rootPointer.right
                } else {
                    rootPointer.right = {
                        left: null,
                        val: val,
                        right: null
                    }
                    break
                }
            } else {
                if (rootPointer.left) {
                    rootPointer = rootPointer.left
                } else {
                    rootPointer.left = {
                        left: null,
                        val: val,
                        right: null
                    }
                    break
                }
            }
        }
    }
}


BinarySearchTree.prototype.minValue = function() {
    if (!this.root) {
        return
    } else {
        //Traverse to the leftmost node
        var node = this.root
        while (node && node.left) {
            node = node.left
        }
        return node.val
    }
}

BinarySearchTree.prototype.maxValue = function() {
    if (!this.root) {
        return 0
    } else {
        //Traverse to the rightmost node
        var node = this.root
        while (node && node.right) {
            node = node.right
        }
        return node.val
    }
}

function inOrderTraversal(node) {
    if (node) {
        if (!node.root) {
            inOrderTraversal(node.left)
            visitNode(node.val)
            inOrderTraversal(node.right)
        } else {
            inOrderTraversal(node.root.left)
            visitNode(node.root.val)
            inOrderTraversal(node.root.right)
        }
    }
}

function visitNode(val) {
    console.log(val)
}
