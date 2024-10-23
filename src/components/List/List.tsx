import taskStore from "../../store/taskStore";
import { Card } from "../Card/Card";
import { observer } from "mobx-react";
export const List = observer(({ flag, handleEditCard, currentCard }) => {
  return (
    <div className="w-full flex flex-row justify-between items-start gap-3 bg-slate-200 p-5">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <p className="text-2xl">Нужно сделать</p>
        {taskStore.todoTasks.map((el) => {
          return (
            <Card
              el={el}
              key={el.id}
              flag={flag}
              handleEditCard={handleEditCard}
              currentCard={currentCard}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 m-5">
        <p className="text-2xl">В процессе</p>
        {taskStore.inProgressTasks.map((el) => {
          return (
            <Card
              el={el}
              key={el.id}
              flag={flag}
              handleEditCard={handleEditCard}
              currentCard={currentCard}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 m-5">
        <p className="text-2xl">На ревью</p>
        {taskStore.onReviewTasks.map((el) => {
          return (
            <Card
              el={el}
              key={el.id}
              flag={flag}
              handleEditCard={handleEditCard}
              currentCard={currentCard}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 m-5">
        <p className="text-2xl">Сделана</p>
        {taskStore.doneTasks.map((el) => {
          return (
            <Card
              el={el}
              key={el.id}
              flag={flag}
              handleEditCard={handleEditCard}
              currentCard={currentCard}
            />
          );
        })}
      </div>
    </div>
  );
});
