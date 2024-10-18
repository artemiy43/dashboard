import { Task } from "../../store/taskStore";
//import { Statuses } from "../../store/taskStore";
import "./Card.css";
import taskStore from "../../store/taskStore";
export const Card = ({ el }: Task) => {
  return (
    <div className="border rounded-md p-6 flex flex-col justify-center items-end">
      <button
        className="top-1 right-1 card_image size-12"
        onClick={() => taskStore.deleteTask(el.id)}
      />
      <div className="flex flex-col gap-2">
        <p className="text-start text-xl">id: {el.id}</p>
        <p className="text-center font-bold text-2xl">{el.name}</p>
        <p className="text-start text-lg">{el.text}</p>
        <p className="text-center text-xl">{el.status}</p>
        <div className="flex flex-row justify-between">
          <button
            className="arrowLeft size-6 box-content"
            onClick={() => taskStore.changeStatusTask(el, "dec")}
          />
          <button
            className="arrowRight size-6 box-content"
            onClick={() => taskStore.changeStatusTask(el, "inc")}
          />
        </div>
      </div>
    </div>
  );
};
