
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null; //tree is currently empty
    }

    insert(root, value){
        if(root==null){
            root= new Node(value);
        } else if(value<root.value)
            root.left=this.insert(root.left,value);
        else
            root.right=this.insert(root.right,value);

        return root;
    }
}

let tree = new BinaryTree();

let items= [ 8, 4 , 12,  1, 6, 10, 14];

for(let item of items){
    tree.root=tree.insert(tree.root, item);
}

console.log(tree.root.value) ; //8
console.log(tree.root.left.value); //4
console.log(tree.root.left.left.value); //1
console.log(tree.root.left.right.value); //6
console.log(tree.root.right.value); //12
console.log(tree.root.right.left.value); //10
console.log(tree.root.right.right.value); //14
