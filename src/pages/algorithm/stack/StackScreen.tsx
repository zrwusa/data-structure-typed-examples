import * as React from 'react';
import {useState} from 'react';
import {AlgorithmPanel} from '../../../components';
import {isValidParenthesis} from '../../../algorithms';

export const StackScreen = () => {
    const [parenthesisInput, setParenthesisInput] = useState('');

    return <>
        <input value={parenthesisInput} onChange={(e) => {
            setParenthesisInput(e.target.value);
        }}/>
        <AlgorithmPanel algorithm={isValidParenthesis} testCase={[parenthesisInput]}
                        buttonLabel={'Parenthesis Check'}/>
    </>
}