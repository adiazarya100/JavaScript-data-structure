/**
 * Created by Adi Azarya
 */

function Queue() {
    var arr = [];
    this.getLength = function() {
        return arr.length;
    };

    this.isEmpty = function() {
        if(arr.length == 0)
            return console.log('Queue is empty');
        else return console.log('Queue is NOT empty');
    };

    this.enqueue = function(val) {
        arr.push(val);
    };
    this.dequeue = function() {
        if (0 != arr.length) {
            var fifo = arr[0];
            arr = arr.slice(1);  //O(n) -> js implemantion.
            return fifo;
        }
    };
    this.peek = function() {
        if( 0 < arr.length)
            return arr[0];
        else return console.log('Queue is empty');

    }
};

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(6);
queue.dequeue();

console.log(queue.peek());
