import { useForm } from "react-hook-form";
import UserStore from "../store/userStore.ts";
import { useNavigate } from "react-router-dom";
import { Genders } from "../store/userStore.ts";

type Inputs = {
  gender: Genders;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
};

export const Sign = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    UserStore.login(data);
    navigate("/dashboard", { replace: false });
  });

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 p-5 shadow-black shadow-md text-center bg-white rounded-xl md:flex-col md:p-8 dark:bg-slate-500 dark:text-white">
      <div className="flex flex-col text-center place-content-center">
        <h2 className="text-4xl font-bold dark:text-white">Добро пожаловать</h2>
        <p className="my-4 text-xl text-opacity-70 font-thin dark:text-white">
          Введите свои данные.
        </p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col w-full md:w-2/5">
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Имя</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="text"
            placeholder="Artem"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Фамилия</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="text"
            placeholder="Bondar"
            {...register("lastName", { required: true, maxLength: 20 })}
          />
          {errors.lastName && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Номер телефона</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="tel"
            placeholder="89374682747"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-1/2">
          <label>Эл. почта</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="email"
            placeholder="artemiy.bondar49@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-600 m-1 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-start p-2 text-lg gap-3 basis-full">
          <label>Пароль</label>
          <input
            className="w-full p-2 text-black border-solid border border-black border-opacity-50 rounded-lg"
            type="password"
            placeholder="************"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-600 p-0">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex flex-row justify-center items-center p-2 text-lg gap-3 basis-full">
          <label>Пол:</label>
          <label>муж</label>
          <input
            type="radio"
            {...register("gender", { required: true })}
            value={Genders.male}
          />
          <label>жен</label>
          <input
            type="radio"
            {...register("gender", { required: true })}
            value={Genders.female}
          />
          {errors.gender && (
            <span className="text-sm text-red-600 p-0">
              This field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="justify-self-center seif-center bg-slate-200 px-4 dark:bg-inherit dark:border-white"
        >
          Войти
        </button>
      </form>
    </div>
  );
};
