

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(){
        //underscore conventionally defines it is private
        this._root=null; 
    }

    //underscore indicate this method is also private and should be called only internally
    _insert(root, value){
        if(root==null){
            root= new Node(value);
        } else if(value<root.value)
            root.left=this._insert(root.left,value);
        else
            root.right=this._insert(root.right,value);

        return root;
    }

    //public interface to insert
    insert(...values){
        for(let value of values)
            this._root=this._insert(this._root, value);
    }
}

let tree = new BinaryTree();

let items= [ 8, 4 , 12,  1, 6, 10, 14];

tree.insert(...items);

console.log(tree._root.value) ; //8
console.log(tree._root.left.value); //4
console.log(tree._root.left.left.value); //1
console.log(tree._root.left.right.value); //6
console.log(tree._root.right.value); //12
console.log(tree._root.right.left.value); //10
console.log(tree._root.right.right.value); //14
