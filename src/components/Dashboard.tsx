import { useForm } from "react-hook-form";
import taskStore from "../store/taskStore";
import { Statuses } from "../store/taskStore";
import { Card } from "./Card/Card";
import { observer } from "mobx-react";
type Inputs = {
  name: string;
  text: string;
  status: Statuses;
};

export const Dashboard = observer(() => {
  //console.log(Statuses);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    //console.log(data);
    //console.log(taskStore.tasks);
    taskStore.addTask({
      id: taskStore.tasks[taskStore.tasks.length - 1].id + 1,
      ...data,
    });
  });
  return (
    <>
      <div className="p-3 flex flex-col justify-center items-center">
        <p>Общий прогресс: </p>
        <p>{taskStore.totalProgress} %</p>
        <progress
          className="w-72 text-white"
          value={(taskStore.totalProgress / 100).toFixed(2)}
        />
      </div>
      <form
        className="w-full p-8 flex flex-row justify-center items-center gap-3"
        onSubmit={onSubmit}
      >
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Название</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="text"
            placeholder="Покушать"
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Текст</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="text"
            placeholder="Приготовить суп на обед"
            {...register("text", { required: true })}
          />
          {errors.text && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Статус</label>
          <select
            {...register("status")}
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
          >
            {Object.entries(Statuses).map((el, index) => {
              return (
                <option value={el[1]} key={index}>
                  {el[1]}
                </option>
              );
            })}
          </select>
          {errors.status && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="justify-self-center seif-center bg-slate-200 px-4 dark:bg-inherit dark:border-white"
        >
          Добавить задачу
        </button>
      </form>
      <div className="w-full flex flex-row justify-between items-start gap-3 ">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-2xl">Нужно сделать</p>
          {taskStore.todoTasks.map((el) => {
            return <Card el={el} key={el.id} />;
          })}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5 m-5">
          <p className="text-2xl">В процессе</p>
          {taskStore.inProgressTasks.map((el) => {
            return <Card el={el} key={el.id} />;
          })}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5 m-5">
          <p className="text-2xl">На ревью</p>
          {taskStore.onReviewTasks.map((el) => {
            return <Card el={el} key={el.id} />;
          })}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5 m-5">
          <p className="text-2xl">Сделана</p>
          {taskStore.doneTasks.map((el) => {
            return <Card el={el} key={el.id} />;
          })}
        </div>
        <p>{}</p>
      </div>
    </>
  );
});
