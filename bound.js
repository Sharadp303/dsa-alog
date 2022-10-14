function lowerB(arr,target){
    let low=0;
    let right=arr.length;
    while(low<right){
        let mid=Math.floor((low+right)/2);
        if(arr[mid]<target){
            low=mid+1;
        }
        else{
               right=mid;
        }
    }
return low;
}
console.log(lowerB([2,4,5,5,8,9,10],5))


function upperB(arr,target){
    let low=0;
    let right=arr.length;
    while(low<right){
        let mid=Math.floor((low+right)/2);
        if(arr[mid]>target){
            right=mid;
        }
        else{
               low=mid+1;
        }
    }
return right;
}

console.log(upperB([2,4,5,5,8,9,10],5))