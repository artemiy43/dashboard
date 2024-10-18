//import avatar from "../../assets/man.png";
import toggle from "../../assets/light-mode.png";
import UserStore from "../../store/userStore.ts";
import { useNavigate } from "react-router-dom";
import manAvatar from "../../assets/manAvatar.png";
import womanAvatar from "../../assets/womanAvatar.png";
import "./Header.css";
export const Header = ({ toggleDarkMode }) => {
  const navigate = useNavigate();

  function handleLogButton() {
    if (UserStore.user.email) {
      UserStore.logout();
    }
    navigate("/");
  }
  return (
    <header className="w-full p-3 flex flex-row justify-between items-center border-b-2 border-black dark:border-white">
      <div className="flex flex-col place-content-center p-2 gap-3 text-center md:flex-row">
        <img
          src={UserStore.user.gender === "муж" ? manAvatar : womanAvatar}
          alt="avatar"
          className="size-16 place-self-center"
        />
        <p className="place-self-center">
          {UserStore.user.email ? UserStore.fullName : "Unknown"}
        </p>
      </div>
      <div className="flex flex-col place-content-center p-2 gap-3 md:flex-row">
        <img
          src={toggle}
          onClick={toggleDarkMode}
          className="hover:cursor-pointer size-9 place-self-center"
        />
        <button
          className="place-self-center dark:bg-inherit dark:text-white dark:border-white"
          onClick={() => handleLogButton()}
        >
          {UserStore.user.email ? "Выйти" : "Войти"}
        </button>
      </div>
    </header>
  );
};
