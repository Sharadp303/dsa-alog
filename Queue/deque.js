class Deque{
constructor(){
this.data=[];
this.rear=0;
this.front=0;
}

insertAtFront(value){
    if(this.isEmpty()){
        this.data[this.rear]=value;
        this.rear++
    }
    else if(this.front>0){
        this.data[this.front-1]=value;
        this.front--;
    }
    else{
        for(let i=this.data.length;i>0;i--){
            this.data[i]=this.data[i-1];
        }
             this.data[0]=value;
             this.rear++;    
    }

}
insertAtRear(value){
    this.data[this.rear]=value;
    this.rear++;
}
deleteAtFront(){
    if(!this.isEmpty()){
       let index=this.front
        this.data[index]==null;
        this.front++;

    }
}
deleteAtRear(){
    if(!this.isEmpty()){
        let index=this.rear;
        this.data[index-1]=null;
        this.rear--;
    }
    else{
        throw new Error('Underflow condition')
    }
}
isEmpty(){
    return this.front===this.rear;
}

print(){
    for(let i=0;i<this.data.length-1;i++){
        if(this.data[i]){
            console.log(this.data[i])
        }
    }
}

}

let dq=new Deque();
