import * as React from 'react';
import {AlgorithmPanel} from '../../../components';
import {canPartition, letterCombinations, runAllWordBreakII, runCombinationPermutation} from '../../../algorithms';
import Button from '@mui/material/Button';
import {canPartitionCase3} from '../../../algorithms/dp/cases';

export const DfsCombinationPermutationScreen = () => {
    return <>
        <AlgorithmPanel algorithm={letterCombinations} testCase={['29']} buttonLabel={'Letter Combinations'}/>
        <Button onClick={() => {
            runCombinationPermutation().then()
        }}>Test Combination & Permutation</Button>
        <AlgorithmPanel algorithm={runAllWordBreakII} testCase={[]} buttonLabel={'Run All BreakWordII'}/>
        <AlgorithmPanel algorithm={canPartition} testCase={canPartitionCase3}
                        buttonLabel={'Partition Equal Subset Sum'}/>
    </>
}