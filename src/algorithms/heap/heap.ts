import {MaxHeap, MinHeap} from 'data-structure-typed';
import _ from 'lodash';

export const testHeap = () => {
    const minNumHeap = new MinHeap<number>();
    minNumHeap.add(1).add(6).add(2).add(0).add(5).add(9);
    console.log(minNumHeap.poll() === 0);
    console.log(minNumHeap.poll() === 1);
    console.log(minNumHeap.peek() === 2);
    console.log(minNumHeap.toArray().length === 4);
    console.log(minNumHeap.toArray()[0] === 2);
    console.log(minNumHeap.toArray()[1] === 5);
    console.log(minNumHeap.toArray()[2] === 9);
    console.log(minNumHeap.toArray()[3] === 6);

    const minHeap = new MinHeap<{ a: string }>();
    minHeap.add(1,{a: 'a1'});
    minHeap.add(6,{a: 'a6'});
    minHeap.add(2,{a: 'a2'});
    minHeap.add(0,{a: 'a0'});

    console.log(_.isEqual(minHeap.peek(), {a: 'a0'}));
    console.log(_.isEqual(minHeap.toArray(), ([{'a': 'a0'}, {'a': 'a1'}, {'a': 'a2'}, {'a': 'a6'}])));
    let i = 0;
    const expectPolled = [{'a': 'a0'}, {'a': 'a1'}, {'a': 'a2'}, {'a': 'a6'}];
    while (minHeap.size > 0) {
        console.log(_.isEqual(minHeap.poll(), expectPolled[i]));
        i++;
    }

    const maxHeap = new MaxHeap<{ a: string }>();
    maxHeap.add(1,{a: 'a1'});
    maxHeap.add(6,{a: 'a6'});
    maxHeap.add(5,{a: 'a5'});
    maxHeap.add(2,{a: 'a2'});
    maxHeap.add(0,{a: 'a0'});
    maxHeap.add(9,{a: 'a9'});
    console.log(_.isEqual(maxHeap.peek(), {"a": "a9"}));
    console.log(_.isEqual(maxHeap.toArray(), [{"a": "a9"}, {"a": "a2"}, {"a": "a6"}, {"a": "a1"}, {"a": "a0"}, {"a": "a5"}]));
    const maxExpectPolled = [{"a": "a9"}, {"a": "a6"}, {"a": "a5"}, {"a": "a2"}, {"a": "a1"}, {"a": "a0"}];
    let maxI = 0;
    while (maxHeap.size > 0){
        console.log(_.isEqual(maxHeap.poll(), maxExpectPolled[maxI]));
        maxI++;
    }
};
