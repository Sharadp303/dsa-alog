function binary(arr,target){
let left=0;
let right=arr.length-1;
while(left<=right){
    mid=parseInt((left+right)/2)
    if(arr[mid]==target){
        return mid
    }
    else if(arr[mid]<target){
        left=mid+1;
    }
    else{
        right=mid-1;
    }


}
return -1;
}
const arr=[1,2,5,7,13,15,16,18,24,28,29]
const target=[18]

console.log(binary(arr,target))