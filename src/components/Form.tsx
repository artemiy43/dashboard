import { Statuses } from "../store/taskStore";
export const Form = ({ onSubmit, register, errors, currentCard }) => {
  return (
    <form
      className={`w-full p-8 flex flex-row justify-center items-center gap-3 ${
        currentCard?.name ? "bg-orange-300" : "bg-inherit"
      }`}
      onSubmit={onSubmit}
    >
      <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
        <label>Название</label>
        <input
          className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
          type="text"
          placeholder="Покушать"
          {...register("name", { required: true, maxLength: 20 })}
          //   value='{currentCard?.name || ""}'
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
          //   value={currentCard?.text || ""}
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
          //   value={currentCard?.status || ""}
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
  );
};
