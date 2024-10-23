import { useForm } from "react-hook-form";
import taskStore from "../store/taskStore";
import { Statuses } from "../store/taskStore";
import { List } from "./List/List";
import { observer } from "mobx-react";
import { Form } from "./Form";
import { useState } from "react";
type Inputs = {
  name: string;
  text: string;
  status: Statuses;
};

export const Dashboard = observer(() => {
  const [flag, setFlag] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState(null);

  function handleEditCard(flag, card) {
    setFlag(flag);
    if (currentCard === null) {
      setCurrentCard(card);
      setValue("name", card!.name);
      setValue("text", card!.text);
      setValue("status", card!.status);
    } else {
      setCurrentCard(null);
      setValue("name", "");
      setValue("text", "");
      setValue("status", Statuses.ToDo);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    if (flag === false) {
      taskStore.addTask({
        id: taskStore.tasks[taskStore.tasks.length - 1].id + 1,
        ...data,
      });
      setValue("name", "");
      setValue("text", "");
      setValue("status", Statuses.ToDo);
    } else
      taskStore.editTask({
        id: currentCard?.id,
        ...data,
      });
    setCurrentCard(null);
    setValue("name", "");
    setValue("text", "");
    setValue("status", Statuses.ToDo);
    setFlag(false);
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
      <Form
        onSubmit={onSubmit}
        errors={errors}
        register={register}
        currentCard={currentCard}
      />
      <List
        flag={flag}
        handleEditCard={handleEditCard}
        currentCard={currentCard}
      />
    </>
  );
});
