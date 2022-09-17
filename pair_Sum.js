function sum_subset(arr){
left=0;
right=arr.length-1;

while(left<=right){
let mid=Math.floor((left+right)/2);
   if(arr[mid]+arr[mid-1]==target||arr[mid]+arr[mid+1]==target) {
      if(arr[mid]+arr[mid-1]==target){
        return [mid,mid-1];
      }
      if(arr[mid]+arr[mid+1]==target){
        return [mid,mid+1];
      }
   }
   if(arr[mid]+arr[mid-1]<target||arr[mid]+arr[mid+1]<target){
    left=mid+1;
   }
   else{
    right=mid-1;
   }
}
return -1;
}
let arr=[1,3,4,5,7,10,11,12]
target=12;
console.log(sum_subset(arr,target))