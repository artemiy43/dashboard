//import { Task } from "../../store/taskStore";
//import { Statuses } from "../../store/taskStore";
import "./Card.css";
import taskStore from "../../store/taskStore";
export const Card = ({ el, flag, handleEditCard, currentCard }) => {
  return (
    <div
      className={`w-full border border-slate-900 rounded-md p-6 flex flex-col justify-center items-center ${
        flag && currentCard.id === el.id ? "bg-orange-400" : "bg-inherit"
      }`}
    >
      <div className="w-full flex flex-row justify-between items-center p-2">
        <button
          className="top-1 right-1 card_icon card_edit size-12"
          onClick={() => handleEditCard(!flag, el)}
        />
        <button
          className="top-1 right-1 card_icon card_close size-12"
          onClick={() => taskStore.deleteTask(el.id)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-start text-xl">id: {el.id}</p>
        <p className="text-center font-bold text-2xl">{el.name}</p>
        <p className="text-start text-lg">{el.text}</p>
        <p className="text-center text-xl">{el.status}</p>
        <div className="flex flex-row justify-between">
          <button
            className="card_icon arrowLeft size-6 box-content"
            onClick={() => taskStore.changeStatusTask(el, "dec")}
          />
          <button
            className="card_icon arrowRight size-6 box-content"
            onClick={() => taskStore.changeStatusTask(el, "inc")}
          />
        </div>
      </div>
    </div>
  );
};
