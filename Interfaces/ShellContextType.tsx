import { HistoryEntry } from "./HistoryEntry";

export interface ShellContextType {
    history: HistoryEntry[]
    setHistory: (output: string) => void
    command: string
    setCommand: (command: string) => void
    // executeCommand: () => void
}