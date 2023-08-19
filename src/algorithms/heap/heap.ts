import {MaxHeap, MinHeap} from 'data-structure-typed';

export const testHeap = () => {
    const minNumHeap = new MinHeap<number>();
    minNumHeap.add(1).add(6).add(2).add(0).add(5).add(9);
    console.log('poll 0', minNumHeap.poll());
    console.log('poll 1', minNumHeap.poll());
    console.log('peek 2', minNumHeap.peek());
    console.log('toArray', minNumHeap.toArray());
    console.log('minNumHeap', minNumHeap);


    const minHeap = new MinHeap<{ a: string }>();
    console.log('add a1', minHeap.add({a: 'a1'}, 1));
    console.log('add a6', minHeap.add({a: 'a6'}, 6));
    console.log('add a2', minHeap.add({a: 'a2'}, 2));
    console.log('add a0', minHeap.add({a: 'a0'}, 0));

    console.log('minHeap', minHeap);
    console.log('peek a0', minHeap.peek());
    console.log('toArray', minHeap.toArray());
    while (minHeap.size > 0) console.log(minHeap.poll());


    const maxHeap = new MaxHeap<{ a: string }>();
    console.log('add a1', maxHeap.add({a: 'a1'}, 1));
    console.log('add a6', maxHeap.add({a: 'a6'}, 6));
    console.log('add a5', maxHeap.add({a: 'a5'}, 5));
    console.log('add a2', maxHeap.add({a: 'a2'}, 2));
    console.log('add a0', maxHeap.add({a: 'a0'}, 0));
    console.log('add a9', maxHeap.add({a: 'a9'}, 9));
    console.log('peek a9', maxHeap.peek());
    console.log('toArray', maxHeap.toArray());
    while (maxHeap.size > 0) console.log(maxHeap.poll());
};
