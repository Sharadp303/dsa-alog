function duplicate(arr,target){
let left=0;
let right=arr.length-1;

while(left<=right){
let mid=Math.floor((left+right)/2)
if(arr[mid]==target){
    if(arr[mid]===arr[mid-1]||arr[mid]==arr[mid+1]){
        return true;
    }
    else{
        return false;
    }
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
arr=[1,2,4,5,5,7,8];
console.log(duplicate(arr,5))