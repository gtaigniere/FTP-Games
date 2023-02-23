export interface User {
  username: string;
  email: string;
  password: string;
  role: string;
}

export const users = [
  {
    username: 'gil',
    email: 'gillout@bbox.fr',
    password: 'gillout1',
    role: 'admin'
  },
  {
    username: 'pat',
    email: 'patrick@free.fr',
    password: 'patrick2',
    role: 'user'
  },
  {
    username: 'jeff',
    email: 'jeffrey@sfr.fr',
    password: 'jeffrey3',
    role: 'user'
  }
];
