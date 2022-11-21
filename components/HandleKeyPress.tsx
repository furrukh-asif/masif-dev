import { KeyboardEvent } from "react";

export function handleEnterKeyPress(f: (command: string) => void, command : string){
    return handleKeyPress(f, "Enter", command);
}

export function handleKeyPress(f: (command: string) => void, key: string, command : string){
    return (e: KeyboardEvent) => {
        if(e.key == key){
            f(command)
        }
    }
}