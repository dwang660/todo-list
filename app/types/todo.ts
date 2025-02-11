export enum TodoStatus {
  OPEN = "Open",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}


export interface Todo {
    input:string,
    status:TodoStatus,
}