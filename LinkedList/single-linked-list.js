function linkedList() {
    this.head = null
}

linkedList.prototype.push = function(val) {

    var node = {
        val: val,
        next: null
    }
    if (!this.head) {
        this.head = node
    } else {

        var current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        current = current.next
    }
}

linkedList.prototype.remove = function(val) {
    if (!this.head) {
        console.log("list is empty")
        return
    }

    var currentPointer = this.head
    if (currentPointer.val == val && currentPointer.next) {
        //Head is the node to be removed
        this.head = currentPointer.next
        return
    }

    var previousPointer = currentPointer
    while (currentPointer.next) {
        if (currentPointer.val == val) {
            previousPointer.next = currentPointer.next
            return
        }
        previousPointer = currentPointer
        currentPointer = currentPointer.next
    }
    //Last node
    if (currentPointer.val == val) {
        previousPointer.next = null
        return
    } else {
        console.log("Value not present")
    }
}

linkedList.prototype.isLooped = function() {
    var slow = fast = current = this.head

    if (!this.head || !this.head.next) {
        return false
    }
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            return true
        }
    }

    return false
}

linkedList.prototype.loopStarting = function() {
    if (!this.head) {
        return
    }

    var slow = fast = this.head
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            slow = this.head
            while (slow != fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return
}

linkedList.prototype.middleOfLinkedList = function() {
    if (!this.head || !this.head.next) {
        return
    }

    var slow = fast = this.head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

linkedList.prototype.delKthFromEnd = function(k) {
    if (!this.head) {
        return
    }

    var main = ref = this.head

    //Move ref to nth node from head
    var count = 0
    while (count < k) {
        ref = ref.next
            ++count
    }

    var prev = main
    while (ref != null) {
        ref = ref.next
        prev = main
        main = main.next
    }
    console.log("Kth from end is", main)
    prev.next = main.next
}

linkedList.prototype.loopLength = function() {
    if (!this.head || !this.head.next) {
        return 0
    }
    var k = 0
    var slow = fast = this.head
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            slow = this.head

            while (slow !== fast) {
                slow = slow.next
                fast = fast.next
            }

            while (slow && slow.next) {
                ++k;
                slow = slow.next
                if (slow == fast)
                    break
            }
            return k
        }else{
        	return 0
        }
    }
}

linkedList.prototype.listLength = function() {
    var l = 0
    if (!this || !this.head) {
        return
    }

    if (!this.isLooped) {
        var pointer = this.head
        while (pointer) {
            ++l
            pointer = pointer.next
        }
        return l
    } else {
        var start = this.loopStarting()
        var current = this.head

        var l1 = 0;
        while (current && current != start) {
            ++l1
            current = current.next
            break
        }
        return l1 + this.loopLength()
    }
}

function detectAndRemoveLoop(ll) {
    var slow = fast = ll.head

    if (!ll.head || !ll.head.next) {
        return false
    }
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            slow.next = null
            return true
        }
    }
    return false
}

function reversell(ll) {
    if (!ll.head || !ll.head.next) {
        return ll
    }

    //Copy linked list into an array

    var current = ll.head
    var nodes = []
    while (current) {
        nodes.push(current)
        current = current.next
    }

    var reverseLinkedList = new linkedList()
    reverseLinkedList.head = nodes.pop()
    var pointer = reverseLinkedList.head

    while (nodes.length) {
        var node = nodes.pop()
        node.next = null
        pointer.next = node
        pointer = pointer.next
    }

    return reverseLinkedList
}