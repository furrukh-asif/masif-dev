import Layout from './layout';
import {Box, Text, InputGroup, Input, InputLeftAddon} from '@chakra-ui/react';
import React, { useState, useRef, useEffect, ChangeEventHandler } from 'react';
import styles from './LandingPage.module.css';
import { handleEnterKeyPress } from './HandleKeyPress';

type HistoryEntry = {
    command: string,
    output: string
}


export default function LandingPage(){
    const inputRef = React.useRef(null);
    const [value, setValue] = useState('');
    const [command, setCommand] = useState('');
    const [init, setInit] = useState(true);
    const [history, setHistory] = useState<HistoryEntry[]>([]);

    useEffect(() => {
        if(!init){
            executeCommand();
        }
    }, [command, init])

    useEffect(() => {
        console.log(history)
    }, [history]);

    function helper(value: string): void{
        setCommand(value);
        setInit(false);
    }

    function executeCommand(){
        console.log(command);
        if (command === 'about') {
            const output = "I am a full-stack engineer."
            _setHistory(output);
        } else {
            const output = "Command not found. Try again."
            _setHistory(output);
        }
    }

    function _setHistory(output: string){
        setHistory(prevHistory => [
            ...prevHistory, 
            {command, output}
        ])
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
                            value={value}
                            onChange={(event) => setValue(event.target.value)} 
                            ref={inputRef} 
                            type="text" 
                            border='0' 
                            onKeyDown={handleEnterKeyPress(helper, value)}/>
                    </InputGroup>
                </Box>
            </Layout>
        </div>
    )
}