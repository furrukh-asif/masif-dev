import React, { createContext, useState, useEffect, useContext } from "react";
import { ShellContextType } from "../Interfaces/ShellContextType";
import { HistoryEntry } from "../Interfaces/HistoryEntry";

const initShellContext = {
    history: [],
    setHistory: (output: string) => {},
    command: "",
    setCommand: (command: string) => {},
}

const ShellContext = createContext<ShellContextType>(initShellContext);

export const useShellContext = () => {
    return useContext(ShellContext);
}

export const ShellProvider = ({ children }: {children: React.ReactNode}) => {
    const [command, _setCommand] = useState('');
    const [init, setInit] = useState(true);
    const [history, _setHistory] = useState<HistoryEntry[]>([]);

    useEffect(() => {
        if(!init){
            console.log(history);
            executeCommand();
        }
    }, [command, init])

    function setHistory(output: string){
        _setHistory(prevHistory => [
            ...prevHistory, 
            {command, output}
        ])
    }

    function setCommand(command: string){
        _setCommand(command);
        setInit(false);
    }

    function executeCommand(){
        if (command === 'about') {
            const output = "I am a full-stack engineer."
            setHistory(output);
        } else {
            const output = "Command not found. Try again."
            setHistory(output);
        }
    }

    const providerValue = {
        history,
        setHistory,
        command,
        setCommand
    }

    return (
        <ShellContext.Provider value={{history,
            setHistory,
            command,
            setCommand}}>
            {children}
        </ShellContext.Provider>
    );

}