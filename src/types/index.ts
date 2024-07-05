export interface ITask {
    taskId : string;
    // taskStartTime : time->hour ?string
    // taskEndTime : time->hour ?string
    taskName : string;
    taskDescription : string;
    taskOwner : string;
    // taskIsDone : boolean;
}

// export interface ITodoList {
//     taskId : string;
//     taskEndDay : Date?String;
//     taskName : string;
//     taskDescription : string;
//     taskOwner : string;
//     todoListIsDone : boolean;
// }

export interface ILogItem {
    logId : string;
    logAuthor : string;
    logMessage : string;
    logTimestamp : string;
}

export interface IBoard {
    boardId : string;
    boardName : string;
    lists: IList[];
}

export interface IList {
    listId : string;
    listName : string;
    tasks : ITask[];
}