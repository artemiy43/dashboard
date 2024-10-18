import { makeAutoObservable } from "mobx";

export enum Genders {
  male = "муж",
  female = "жен",
}

export interface IUserStore {
  gender: Genders.male | Genders.female;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

class UserStore {
  user: IUserStore = {
    gender: Genders.male,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  };

  constructor() {
    makeAutoObservable(this);
    //console.log(Genders.male);
  }

  get fullName() {
    return this.user.firstName + " " + this.user.lastName;
  }

  login(user: IUserStore) {
    this.user = user;
  }

  logout() {
    this.user = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    };
  }
}

export default new UserStore();
