class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(value) {
        this.top++
        this.data[this.top] = value;
        //return this.print();
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('`empty stack`');
        }
        this.data.pop();
        this.top--;
        //return this.print();

    }
    isEmpty() {
        if (this.top === -1) {
            return true;
        }
        else {
            return false;
        }
    }
    print() {
        let top = this.top;
        while (top > -1) {
            console.log(this.data[top])
            top--;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.top];
    }
    insertAtBottom(value) {
        if (this.isEmpty()) {
            this.push(value);
            return;
        }
        else {
            let temp = this.peek();
            this.pop();
            this.insertAtBottom(value);
            this.push(temp)

        }
    }
    reverse() {
        if (!this.isEmpty()) {
            const temp = this.peek();
            this.pop();
            this.reverse();
            this.insertAtBottom(temp)

        }
    }

    minAndMax() {
        if (!this.isEmpty()) {
            let min = this.peek();
            //console.log(min)
            let max = this.peek();
            //console.log(max)
            let top = this.top;

            while (top > -1) {

                if (this.data[top] > max) {
                    max = this.data[top];

                }
                if (this.data[top] < min) {
                    min = this.data[top];

                }
                top--;

            }
            console.log(max)
            console.log(min)
        }
    }
    sort(){


        
    }

}

let stack = new Stack()
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.insertAtBottom(0);
//stack.reverse();
stack.print();
//stack.reverse();
console.log(stack)
//stack.minAndMax()

function stackSort(stack){
      if(!stack.isEmpty()){
        let temp=stack.peek();
        stack.pop();
        stackSort(stack);
        insertsort(stack,temp)
       }
       return;
    }
    function insertsort(stack,temp){
        if(stack.isEmpty()||temp>stack.peek()){
          stack.push(temp)
          return;
        }
        else {
              let  x=stack.peek();
                    stack.pop();
                    insertsort(stack,temp);
                    stack.push(x);
                    return;

        }
    }

    stackSort(stack)
    console.log(stack)




