import * as React from 'react';
import {AlgorithmPanel} from '../../../components';
import {fibonacci} from '../../../algorithms';

export const DpScreen = () => {
    return <>
        <AlgorithmPanel algorithm={fibonacci} testCase={[6]} buttonLabel="Test fibonacci"/>

    </>
}