import Layout from './layout';
import {Box, Text, InputGroup, Input, InputLeftAddon} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import styles from './LandingPage.module.css';
import { handleEnterKeyPress } from './HandleKeyPress';
import { HistoryEntry } from '../Interfaces/HistoryEntry';
import { useShellContext } from '../Context/shellContext';

export default function LandingPage(){
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const {history, setHistory, command, setCommand} = useShellContext();

    function handleEnterKeyHelper(inputValue: string): void{
        setCommand(inputValue);
        setInputValue('');
    }

    return (
        <div className={styles.layout}>
            <Layout>
                <Text fontSize='4xl' textAlign='center'>Welcome to Furrukh Asif's Terminal!</Text>
                <Box>
                    {history.map((historyEntry: HistoryEntry) => (
                        <Text>
                            {historyEntry.command}
                            <br />
                            {historyEntry.output}
                        </Text>
                    ))}
                </Box>
                <Box>
                    <InputGroup>
                        <InputLeftAddon bg='black' border='0' children="guest@Furrukh-Asifs-Terminal %" />
                        <Input
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)} 
                            ref={inputRef} 
                            type="text" 
                            border='0' 
                            onKeyDown={handleEnterKeyPress(handleEnterKeyHelper, inputValue)}/>
                    </InputGroup>
                </Box>
            </Layout>
        </div>
    );
}