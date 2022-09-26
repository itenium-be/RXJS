export type LoginResponse = Omit<User, 'gender'> & {
  gender: string;
  token: string;
}


export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
};


export enum Gender {
  Male,
  Female,
}
