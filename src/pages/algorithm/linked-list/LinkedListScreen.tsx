import * as React from 'react';
import {AlgorithmPanel} from '../../../components';
import {reverseLinkedList} from '../../../algorithms';
import {SinglyLinkedList} from 'data-structure-typed';

export const LinkedListScreen = () => {
    const linkedList = SinglyLinkedList.from([1, 2, 3, 4, 5, 6]);

    return <>
        <AlgorithmPanel algorithm={reverseLinkedList} testCase={[linkedList.head]}
                        buttonLabel={'Reverse Linked List'}/>
    </>
}