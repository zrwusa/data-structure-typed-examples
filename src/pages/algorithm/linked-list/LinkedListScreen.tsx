import * as React from 'react';
import {AlgorithmPanel} from '../../../components';
import {reverseLinkedList} from '../../../algorithms';
import {SinglyLinkedList} from 'data-structure-typed';

export const LinkedListScreen = () => {
    const linkedList = SinglyLinkedList.fromArray([1, 2, 3, 4, 5, 6]);
    const {head} = linkedList;
    // const referLinkedList = Object.create(linkedList);
    return <>
        <AlgorithmPanel algorithm={reverseLinkedList}
                        testCase={[linkedList.head]}
                        referenceData={head}
                        buttonLabel={'Reverse Linked List'}/>
    </>
}