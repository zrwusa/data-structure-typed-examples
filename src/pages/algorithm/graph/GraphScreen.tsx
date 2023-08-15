import * as React from 'react';
import {useState} from 'react';
import {AlgorithmPanel} from '../../../components';
import {
    cutOffTree,
    cutOffTreeCase8,
    networkDelayTime,
    networkDelayTimeCase3,
    regionsBySlashes,
    testGraphs
} from '../../../algorithms';
import TextField from '@mui/material/TextField';

export const GraphScreen = () => {
    const [cutOffTreeCaseInput, setCutOffTreeCaseInput] = useState(JSON.stringify(cutOffTreeCase8[0]));
    const [cutOffTreeCase, setCutOffTreeCase] = useState<Array<Array<Array<number>>>>(cutOffTreeCase8);
    return <>
        <AlgorithmPanel algorithm={testGraphs} testCase={[]} buttonLabel={'Test Graphs'}/>
        <AlgorithmPanel algorithm={cutOffTree} testCase={cutOffTreeCase}
                        buttonLabel={'Cut Off Tree For Golf Event'}
                        relatedNodeKey="cur"
                        referenceData={cutOffTreeCase[0]}
                        relatedRouteKey="route">
            <TextField fullWidth label="Cut Off Tree Case" value={cutOffTreeCaseInput}
                       onChange={(e) => {
                           const {value} = e.target;
                           setCutOffTreeCaseInput(value);
                           try {
                               const parsed = JSON.parse(value);
                               if (parsed instanceof Array
                                   && parsed[0] instanceof Array
                                   // && parsed[0][0] instanceof Array
                                   && typeof parsed[0][0] === 'number') setCutOffTreeCase([parsed])
                           } catch (e) {
                               console.log(e);
                           }

                       }}/>
        </AlgorithmPanel>
        <AlgorithmPanel algorithm={networkDelayTime} testCase={networkDelayTimeCase3}
                        buttonLabel={'Network Delay Time'}/>
        <AlgorithmPanel algorithm={regionsBySlashes} testCase={[[]]} buttonLabel={'Regions by Slashes'}/>
        <AlgorithmPanel algorithm={regionsBySlashes} testCase={[]} buttonLabel={'Regions by Slashes'}/>
    </>
}