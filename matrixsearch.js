function search(arr,target){
let left=0;
let right=arr[0].length*arr.length-1;
while(left<=right){
    let mid=Math.floor((left+right)/2)
    let i=parseInt(mid/arr[0].length)
    //console.log(i)
    let j=parseInt(mid%arr[0].length)
    //console.log(j)
    if(arr[i][j]==target){
        return true;
    }
    else if(arr[i][j]<target){
        left=mid+1;
    }
    else{
        right=mid-1
    }
}

return false;
}
let arr=[[3,4,5],[8,9,10],[11,12,13],[16,18,20]]
let target=3;
console.log(search(arr,target))