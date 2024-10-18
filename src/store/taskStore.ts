import { makeAutoObservable } from "mobx";

export enum Statuses {
  ToDo = "Нужно сделать",
  InProgress = "В процессе",
  OnReview = "На ревью",
  Done = "Сделана",
}

// export enum Statuses {
//   ToDo = 0,
//   InProgress = 1,
//   OnReview = 2,
//   Done = 3,
// }

// export const StatusesMapping: Record<Statuses, string> = {
//   [Statuses.ToDo]: Statuses.ToDo,
//   [Statuses.InProgress]: Statuses.InProgress,
//   [Statuses.OnReview]: Statuses.OnReview,
//   [Statuses.Done]: Statuses.Done,
// };

export interface Task {
  id: number;
  name: string;
  text: string;
  status: Statuses;
}

// export function changeStatusTask(task, flag) {
//   // if (flag === 'inc' && task.status !== "На ревью") {
//   //   task.status =
//   // } else {

//   // }
// }

class UseTaskStore {
  tasks: Task[] = [
    {
      id: 1,
      name: "Взаимодейсвие с API",
      text: "Написать локигу запросов на сервер",
      status: Statuses.ToDo,
    },
    {
      id: 2,
      name: "Дизайн шапки",
      text: "Создать дизайн шапки сайта в Figma под разные экраны",
      status: Statuses.InProgress,
    },
  ];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  get todoTasks() {
    return this.tasks.filter((el) => el.status === "Нужно сделать");
  }

  get inProgressTasks() {
    return this.tasks.filter((el) => el.status === "В процессе");
  }

  get onReviewTasks() {
    return this.tasks.filter((el) => el.status === "На ревью");
  }

  get doneTasks() {
    return this.tasks.filter((el) => el.status === "Сделана");
  }

  get totalProgress() {
    //let filteredLength: number = this.tasks.filter((el) => el.status === "Сделана").length
    return (
      (this.tasks.filter((el) => el.status === "Сделана").length /
        this.tasks.length) *
      100
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((el) => el.id !== id);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  pred() {
    console.log("pred");
  }

  next() {
    console.log("next");
  }

  changeStatusTask(task: Task, flag: string) {
    const findedTask = this.tasks.find((el) => el.id === task.id);
    if (flag === "inc") {
      switch (findedTask!.status) {
        case "Нужно сделать":
          findedTask!.status = Statuses.InProgress;
          break;
        case "В процессе":
          findedTask!.status = Statuses.OnReview;
          break;
        case "На ревью":
          findedTask!.status = Statuses.Done;
          break;
        default:
          break;
      }
      //findedTask!.status = Statuses.InProgress;
    } else if (flag === "dec") {
      switch (findedTask!.status) {
        case "Сделана":
          findedTask!.status = Statuses.OnReview;
          break;
        case "На ревью":
          findedTask!.status = Statuses.InProgress;
          break;
        case "В процессе":
          findedTask!.status = Statuses.ToDo;
          break;
        default:
          break;
      }
    }
  }
}

export default new UseTaskStore();
