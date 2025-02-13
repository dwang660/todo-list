export enum TodoStatus {
  OPEN = "Open",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}


export interface Todo {
    id:string,
    input:string,
    status:TodoStatus,
}