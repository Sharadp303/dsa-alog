// function binary(arr,target){
// let left=0;
// let right=arr.length-1;
// while(left<=right){
//     mid=parseInt((left+right)/2)
//     if(arr[mid]==target){
//         return mid
//     }
//     else if(arr[mid]<target){
//         left=mid+1;
//     }
//     else{
//         right=mid-1;
//     }


// }
// return -1;
// }

function binary(arr,left,right,target){
    let mid=Math.floor((left+right)/2);
    if(arr[mid]===target){
        return mid;
    }
    if(left>right){
        return -1;
    }
    if(arr[mid]<target){
        return binary(arr,mid+1,right,target);
    }
    else{
        return binary(arr,left,mid-1,target);
    }
}
const arr=[1,2,5,7,13,15,16,18,24,28,29]
target=2;
console.log(binary(arr,0,arr.length-1,target))