class Queue{
   constructor(){
  this.data=[]
  this.front=0;
  this.rear=0;
   }

   Enqueue(value){
    
        this.data[this.rear]=value
        this.rear++;
    }
   
    Dequeue(){
       let index=this.front;
        this.data[index]=null;
       this.front++;

    }
    isEmpty(){
        return this.front===this.rear;
    }

    print(){
        let data=this.data;
        for(let i=0;i<data.length;i++){
            if(this.data[i])
            {
                 console.log(this.data[i]);
            }
        }
    }
    peek(){
        if(!this.isEmpty()){
        return this.data[this.front]
    }
}
}

   



let q=new Queue();
q.Enqueue(3);
q.Enqueue(4);
q.Enqueue(5);
q.Enqueue(6);
q.Dequeue();

q.print();
q.peek()
console.log(q)