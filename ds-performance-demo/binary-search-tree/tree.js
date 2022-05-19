/*
    compareFunction(a,b)
    should return 
        0 ---> equal function
        negative ---> a<b
        positive ----> a>b
*/

const BinaryTree=function(compareFunction){

    let _root= null; //closure variable
    let _count=0;

    const _insert=(root, value)=>{
        
        let newNode= {value, left:null,right:null};
        if(root==null){
            root= newNode;
            _count++;
            return root;
        } 
        
        let mark=root;           

        while(true){

            let result= compareFunction(value, mark.value);

            if(result==0) //duplicate
                return root; //no change no update

            if(result<0){
                //goto left subtree
                if(mark.left)
                    mark=mark.left
                else{
                    mark.left=newNode;
                    break;                        
                }
            } else{
               if(mark.right){
                   mark=mark.right;
               } else{
                   mark.right=newNode;
                   break;
               }
            }

        }
        _count++;
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
    const _preorder= (root,action)=>{
        if(!root)
            return ;

        action(root.value);
        _preorder(root.left,action);
        _preorder(root.right,action);
    }

  

    //public method
    this.preorder=(action)=>{
        var stack=[]; 
        var root= _root;
        
        

        while(true){

            action(root.value); //visit parent
            

            if(root.left){
                stack.push(root);
                root=root.left;
            } else if(root.right){
                root=root.right; 
                
            } else {
                //search next available right of parent
                while(!root.right){
                    if(stack.isEmpty)
                        return;
                    root=stack.pop();
                }
            }
        }
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


module.exports=BinaryTree;