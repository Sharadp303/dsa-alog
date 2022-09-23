function squareRoot(n,precision){
let left=0;
let right=n;
let ans=0
while(left<=right){
    let mid=Math.floor((left+right)/2)
if(mid*mid==n){
    ans=mid;
    break;
}
else if(mid*mid<n){
    left=mid+1;
    //ans=mid;
}
else{
    right=mid-1
}

}

let increment=0.1;
for(let i=0;i<precision;i++){
    while(ans*ans<=n){
        ans+=increment;
    }
    ans=ans-increment;
    increment=increment/10;
}
return ans.toFixed(precision);
}
console.log(squareRoot(30,3))