

const BinaryTree=function(){

        let _root= null; //closure variable
        let _count=0;
    
        const _insert=(root, value)=>{
            if(root==null){
                root= {value, left:null,right:null};
                _count++;
            } else if(value<root.value)
                root.left=_insert(root.left,value);
            else if(value>root.value) //--> uncomment to make tree of unique items
                root.right=_insert(root.right,value);
    
            return root;
        };

        this.insert=function(...values){
            for(let value of values)
                _root=_insert(_root, value);
        }
        this.size=()=>{
            return _count;
        }

        //private preorder
        const _preorder= (root)=>{
            if(!root)
                return ;

            console.log(root.value);
            _preorder(root.left);
            _preorder(root.right);
        }

        //public method
        this.preorder=()=>{
            _preorder(_root); //start with absolute root
        }

        const _inorder=(root,action)=>{
            if(!root)
                return;
            _inorder(root.left,action);
            //console.log(root.value);
            action(root.value);
            _inorder(root.right,action);
        }

        this. inorder=(action)=>{
            if(!action)
                action= (value) => process.stdout.write(`${value}\t`);
            _inorder(_root,action);
            if(!action)
                process.stdout.write("\n");
        }

        
        const _postorder=(root)=>{
            if(!root)
                return;
            _postorder(root.left);            
            _postorder(root.right);
            console.log(root.value);
        }

        this. postorder=()=>{
            _postorder(_root);
        }


}


let tree = new BinaryTree();

let items= [12, 22,  8, 18,  14,  6,  2, 30, 9, 22, 5, 20,  4];

tree.insert( ...items);


console.log('items.length',items.length);
console.log('tree.size', tree.size());


let output=[];

tree.inorder( (value)=> output.push(value));

//tree.inorder();

console.log('output',output);







