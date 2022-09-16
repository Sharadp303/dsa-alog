//Linear search

// function linear(arr,target){
// const index=[]  //Global search
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log('index',i)
//         index.push(i)
//     }
// }

// console.log(index)
// }
// const arr=[1,5,5,6,8,9,7];
// const target=5;
// linear(arr,target);
////time complexity: O(N)
//Space complexity : O(1)


function linear(arr,target,count){
    if(arr[count]===target){
        return count;
    }
   
    if(arr.length===count){
        return -1
    }
    

    return linear(arr,target,count+1)

}
console.log(linear([2,5,6,8],5,0))