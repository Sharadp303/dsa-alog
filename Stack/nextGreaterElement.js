///
// For right side next greater element


function RGE(arr){
let nge=[];
let stack=[];
for(let i=arr.length-1;i>=0;i--)
{
if(stack.length==0){
    nge.push(-1);
}
if(stack[stack.length-1]>arr[i]){
    nge.push(stack[stack.length-1])
}
else if(stack[stack.length-1]<=arr[i]){
 while(stack.length>0&& stack[stack.length-1]<=arr[i]){
    stack.pop();
 }
 if(stack.length==0){
    nge.push(-1);
 }
 if(stack[stack.length-1]>arr[i]){
    nge.push(stack[stack.length-1])
 }

}

 stack.push(arr[i])
}
nge.reverse();
console.log(nge)
}

let arr=[1,3,4,2]
console.log(RGE(arr))



function RLE(arr){
    let nge=[];
    let stack=[];
    for(let i=arr.length-1;i>=0;i--)
    {
    if(stack.length==0){
        nge.push(-1);
    }
    if(stack[stack.length-1]<arr[i]){
        nge.push(stack[stack.length-1])
    }
    else if(stack[stack.length-1]>=arr[i]){
     while(stack.length>0&& stack[stack.length-1]>=arr[i]){
        stack.pop();
     }
     if(stack.length==0){
        nge.push(-1);
     }
     if(stack[stack.length-1]<arr[i]){
        nge.push(stack[stack.length-1])
     }
    
    }
    
     stack.push(arr[i])
    }
    nge.reverse();
    console.log(nge)
    }
    
    let arr1=[1,3,4,2]
    console.log(RLE(arr1))




    //--------------------------------------------------------


    function LGE(arr){
      let nge=[];
      let stack=[];
      for(let i=0;i<arr.length;i++)
      {
      if(stack.length==0){
          nge.push(-1);
      }
      if(stack[stack.length-1]>arr[i]){
          nge.push(stack[stack.length-1])
      }
      else if(stack[stack.length-1]<=arr[i]){
       while(stack.length>0&& stack[stack.length-1]<=arr[i]){
          stack.pop();
       }
       if(stack.length==0){
          nge.push(-1);
       }
       if(stack[stack.length-1]>arr[i]){
          nge.push(stack[stack.length-1])
       }
      
      }
      
       stack.push(arr[i])
      }
     // nge.reverse();
      console.log(nge)
      }
      
      let arr3=[1,3,4,2]
console.log(LGE(arr3))


//-------------------------------------------------------------------------
function LLE(arr){
   let nge=[];
   let stack=[];
   for(let i=0;i<arr.length;i++)
   {
   if(stack.length==0){
       nge.push(-1);
   }
   if(stack[stack.length-1]<arr[i]){
       nge.push(stack[stack.length-1])
   }
   else if(stack[stack.length-1]>=arr[i]){
    while(stack.length>0&& stack[stack.length-1]>=arr[i]){
       stack.pop();
    }
    if(stack.length==0){
       nge.push(-1);
    }
    if(stack[stack.length-1]<arr[i]){
       nge.push(stack[stack.length-1])
    }
   
   }
   
    stack.push(arr[i])
   }
   //nge.reverse();
   console.log(nge)
   }
   
   let arr4=[1,3,4,2]
   console.log(LLE(arr4))

    