import type { WritingLog } from "$types/writing.log.type";

export type WritingLogInsert = {
    writingLog: WritingLog
    isSessionLog: boolean
}